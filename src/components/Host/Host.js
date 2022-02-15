import React, { useEffect, useState } from 'react';
import styles from "./Host.module.scss";
import { connect } from 'react-redux';
import waiterSvg from "./svg/waiter-svgrepo-com.svg";
import { hostOrders } from "./functions/tableArrangement";
import { changeTableStatus, removeFromOrderList } from '../../actions/table';
import { addToCard } from '../../actions/completedOrders';
import cloneDeep from 'lodash/cloneDeep';

const Host = props => {
    const ordersList = props.ordersList;
    const tablesList = props.tablesList;
    const completedOrdersList = props.completedOrdersList;
    const [isQueue, setIsQueue ] = useState(false);

    useEffect(() => {
        if (ordersList.length ) {
            sendToTable();
        }
    }, [ordersList]);

    useEffect(() => {
        if (isQueue && ordersList.length) {
            sendToTable();
        }
    }, [completedOrdersList]);
    
    const sendToTable = () => {
        const result = hostOrders(cloneDeep(tablesList), ordersList);
        setTimeout(() => {
            if (result.tableNum) {
                props.changeTableStatus({
                    id: result.tableNum,
                    data: result.data,
                    status: 'start',
                });
                props.removeFromOrderList(result.data.Mobile);
                props.addToCard({
                    Mobile: result.data.Mobile,
                    Diners: result.data.Diners,
                    tables: [result.tableNum],
                    start_time: new Date(),
                    end_time: false,
                    status: 'start',
                });
            } else {
                setIsQueue(true);
            };
        }, 500);
    };

    return (
        <>
        <div className={styles.continer}>
            <img src={waiterSvg}></img>
            <h1>HOST</h1>
        </div>
        </>
    );
};


const mapStateToProps = state => {
    return {
        ordersList: state.ordersList,
        tablesList: state.tablesList,
        completedOrdersList: state.completedOrdersList,
    }
}
export default connect(mapStateToProps, { changeTableStatus, removeFromOrderList, addToCard })(Host);