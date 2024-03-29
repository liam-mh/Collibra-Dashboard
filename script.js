// =============================================================================
// CONTACTS AND LINKS
//
// Links last updated: 08//2024
// Updated by: Liam Hammond

const collibraEnvironmentURL = 'https://elanco-dev.collibra.com/'

const links = [
    collibraEnvironmentURL,                  //  0 | Collibra environment instance
    'apps/data-marketplace/',                //  1 | Collibra marketplace (appends to instance)
    collibraEnvironmentURL+'',               //  2 | FAQ page
    'mailto:'+'liam.hammond@elancoah.com',   //  3 | Collibra SME email (Keep 'mailto:')
                                             //  4 | EDO Data Knowledge Hub - Teams Channel
    'https://teams.microsoft.com/l/channel/19%3aIxRkcemfQBJ7opiN3wjBIeO8iruVHS27X7dgg5U5tFQ1%40thread.tacv2/General?groupId=dadb91e2-23db-4b88-8eff-9cf07f6c74a4&tenantId=8e41bacc-baba-48d6-9fcb-708bd1208e38',
    'https://university.collibra.com/learn', //  5 | Collibra University
                                             //  6 | The spot - Capabilities of DKH
    'https://thespot.elanco.com/esc?id=kb_article&table=kb_knowledge&sysparm_article=KB0020765&sys_kb_id=c91d007adbcf751021dee5bcd3961952',
                                             //  7 | The spot - submit incident DKH
    'https://thespot.elanco.com/esc?id=kb_article&table=kb_knowledge&sysparm_article=KB0020791&sys_kb_id=f220d62bdb07fd1021dee5bcd39619f5'
]

function openLink(index) {
    var link = links[index]
    if (link.startsWith('mailto:')) {
        window.location.href = link
    } else {
        window.open(link, '_blank')
    }
}

// =============================================================================
// DATA INTELLIGENCE CLOUD CONFIG
//
// Links last updated: 08/01/2024
// Updated by: Liam Hammond

const filters = [
    '',                                         //  0 | No filter
    'id=9c49606b-6ffc-4d08-b0ed-c84fe326d604&', //  1 | Candidate status PowerBI Reports and Tables
    'id=9c2f34a9-10c2-478b-bd3a-e5f42ddf5ad2&', //  2 | Domain type = Glossaries
    'id=2676b64d-5671-4544-be41-e1a047a20ae4&', //  3 | Asset type  = Business Term
    'd3e323b2-c34c-4743-aafb-4f8e4d56848b',     //  4 | Community   = Commercial
    'd6df5f25-e80b-4690-bcec-6a30fde189fe',     //  5 | Community   = G&A
    'b769889b-0158-4fc0-90af-c6d24d185070',     //  6 | Community   = M&Q
    '7f2adaa3-7718-4fdd-ba93-4f53dc1bd339',     //  7 | Community   = R&D
]

function search(input = '', filter = 0) {
    var url = links[0]
    if (input != '') {
        url = url + 'search?' + filters[filter] + 'q=' + input;
    } else {
        url = url + 'community/' + filters[filter]
    }
    // console.log(url)
    window.location.href = url;
}
function searchByInput(a) {
    var input = document.getElementById('searchBar').value.trim() || '*';
    var filterIndex = document.getElementById('filterSelect').value || 0;
    console.log(filterIndex);
    search(input, filterIndex);
}
function searchByFilter(filter) {
    search('', filter)
}