
export const hostOrders = (tablesList, ordersList) => {
    const order = ordersList[10];
    let bestResult = false;
    let tableNum = false;
    let data = false;
    tablesList.map(table => {
        if (table.Diners < order.Diners ) return;
        if (table.Status === 'start' ) return;
        
        if (!bestResult) {
            if (table.Diners >= order.Diners) {
                bestResult = table.Diners;
                tableNum = table.Table;
                data = table;
                return;
            }
        };
        if (bestResult) {
            if (table.Diners > order.Diners) {
                if (table.Diners < bestResult) {
                    bestResult = table.Diners;
                    tableNum = table.Table;
                    data = table;
                    return;
                }
            }
        };
    });
    return {bestResult: bestResult, tableNum: tableNum, data: data};
}