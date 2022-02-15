import { IfCanConnect } from './listConnections';
export const joinTables = (tablesList, order) => {
    const connectListTables = IfCanConnect(tablesList);
    let bestResult = false;
    let tableNum = false;
    let data = false;
    connectListTables.forEach((table, index) => {
        console.log('connectListTables.forEach(table => {');
        console.log(index);

        if (table.diners < order.Diners) return;

        // if (!bestResult) {
        //     if (table.diners >= order.Diners) {
        //         bestResult = table.diners;
        //         tableNum = table;
        //         data = {
        //             ...table,
        //             startTimetamp: new Date(),
        //             someDiners: order.Diners,
        //             Mobile: order.Mobile,
        //         };
        //         return;
        //     }
        // };
        // if (bestResult) {
        //     if (table.diners > order.Diners) {
        //         if (table.diners < bestResult) {
        //             bestResult = table.diners;
        //             tableNum = table;
        //             data = {
        //                 ...table,
        //                 startTimetamp: new Date(),
        //                 someDiners: order.Diners,
        //                 Mobile: order.Mobile,
        //             };
        //             return;
        //         }
        //     }
        // };
    });

};

const joinTablesOnFloor = (firstTable, secondTable) => {

};