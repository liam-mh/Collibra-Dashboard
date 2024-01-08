// =============================================================================
// CONTACTS AND LINKS
//
// Links last updated: 08//2024
// Updated by: Liam Hammond

const collibraEnvironmentURL = 'https://elanco.collibra.com/'

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
    'id=c205a7f8-4941-43c8-8c16-7493c622cf25&', //  1 | Asset type  = Tableau Dashboards, Power BI Reports
    '',                                         //  2 | 
    'id=4310ec66-c4d8-4c1c-b943-6677f478b32b&', //  3 | Asset type  = Business Term
    '18b08c14-b591-4db1-906c-d14e8b526590',     //  4 | Community   = Commercial
    '66e55e81-509e-4dca-9336-66e62256ba3f',     //  5 | Community   = G&A
    'daa7f8d4-97de-4b66-acd4-d3d1aa97bfa3',     //  6 | Community   = M&Q
    '0dd15a33-66db-43fc-a249-387e90738c93',     //  7 | Community   = R&D
    'e54b66a3-c10a-4e80-a434-0be28655a7ee',     //  8 | Community   = Enterprise
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