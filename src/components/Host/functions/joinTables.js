import { IfCanConnect } from './listConnections';
export const joinTables = (tablesList, order) => {
    const connectListTables = IfCanConnect(tablesList);
    let bestResult = false;
    let tableNum = false;
    let data = false;
    connectListTables.forEach(table => {

        if (table.diners < order.Diners) return;

        if (!bestResult) {
            if (table.diners >= order.Diners) {
                bestResult = table.diners;
                tableNum = table;
                data = {
                    startTimetamp: new Date(),
                    someDiners: order.Diners,
                    Mobile: order.Mobile,
                };
                return;
            }
        };
        if (bestResult) {
            if (table.diners > order.Diners) {
                if (table.diners < bestResult) {
                    bestResult = table.diners;
                    tableNum = table;
                    data = {
                        startTimetamp: new Date(),
                        someDiners: order.Diners,
                        Mobile: order.Mobile,
                    };
                    return;
                }
            }
        };
    });
    if (bestResult) joinTablesOnFloor([tableNum.a, tableNum.b]);
    return { bestResult: bestResult, tableNum: tableNum, data: data };
};

const joinTablesOnFloor = (arrTables) => {
    const joinId = arrTables.sort((a, b) => a - b).join('-');
    console.log(joinId);
    switch (joinId) {
        case '101-102':
            joinTableA();
            break;
        case '101-103':
            joinTableB();
            break;
        case '102-103':
            joinTableC();
            break;
        case '201-202':
            joinTableD();
            break;
        case '401-402':
            joinTableE();
            break;
        case '302-501':
            joinTableF();
            break;
        case '203-601':
            joinTableG();
            break;

        default:
            break;
    }

};

const joinTableA = () => {
    document.getElementsByClassName('table-101')[0].style.left = '165px';
    document.getElementsByClassName('table-102')[0].style.left = '235px';
    setTimeout(() => {
        document.getElementsByClassName('table-101')[0].style.left = '140px';
        document.getElementsByClassName('table-102')[0].style.left = '260px';
    }, 9000);
}
const joinTableB = () => {
    document.getElementsByClassName('table-103')[0].style.left = '175px';
    document.getElementsByClassName('table-103')[0].style.top = '75px';
    setTimeout(() => {
        document.getElementsByClassName('table-103')[0].style.left = '200px';
        document.getElementsByClassName('table-103')[0].style.top = '100px';
    }, 9000);
}
const joinTableC = () => {
    document.getElementsByClassName('table-103')[0].style.left = '235px';
    document.getElementsByClassName('table-103')[0].style.top = '75px';
    setTimeout(() => {
        document.getElementsByClassName('table-103')[0].style.left = '200px';
        document.getElementsByClassName('table-103')[0].style.top = '100px';
    }, 9000);
}
const joinTableD = () => {
    document.getElementsByClassName('table-201')[0].style.top = '325px';
    document.getElementsByClassName('table-202')[0].style.top = '395px';
    setTimeout(() => {
        document.getElementsByClassName('table-201')[0].style.top = '300px';
        document.getElementsByClassName('table-202')[0].style.top = '420px';
    }, 9000);
}
const joinTableE = () => {
    document.getElementsByClassName('table-401')[0].style.top = '245px';
    document.getElementsByClassName('table-402')[0].style.top = '355px';
    setTimeout(() => {
        document.getElementsByClassName('table-401')[0].style.top = '220px';
        document.getElementsByClassName('table-402')[0].style.top = '380px';
    }, 9000);
}
const joinTableF = () => {
    document.getElementsByClassName('table-302')[0].style.left = '370px';
    document.getElementsByClassName('table-501')[0].style.left = '455px';
    setTimeout(() => {
        document.getElementsByClassName('table-302')[0].style.left = '330px';
        document.getElementsByClassName('table-501')[0].style.left = '490px';
    }, 9000);
}
const joinTableG = () => {
    document.getElementsByClassName('table-203')[0].style.top = '395px';
    document.getElementsByClassName('table-601')[0].style.top = '245px';
    setTimeout(() => {
        document.getElementsByClassName('table-203')[0].style.top = '420px';
        document.getElementsByClassName('table-601')[0].style.top = '220px';
    }, 9000);
}
//     '101-102'
//     '101-103'
//     '102-103'
//     '201-202'
//     '401-402'
//     '501-302'
//     '203-601'