import React, { useEffect } from 'react';
import styles from "./Host.module.scss";
import { connect } from 'react-redux';
import waiterSvg from "./svg/waiter-svgrepo-com.svg";
import { hostOrders } from "./functions/tableArrangement";
import { changeTableStatus } from '../../actions/table';

const Host = props => {
    const ordersList = props.ordersList;
    const tablesList = props.tablesList;

    useEffect(() => {
        const result = hostOrders(tablesList, ordersList);
        setTimeout(() => {
            props.changeTableStatus({
                id: result.tableNum,
                data: result.data,
                status: 'start',
            });
        }, 3000);
    }, []);

    return (
        <div className={styles.continer}>
            <img src={waiterSvg}></img>
            <h1>HOST</h1>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        ordersList: state.ordersList,
        tablesList: state.tablesList,
    }
}
export default connect(mapStateToProps, { changeTableStatus })(Host);