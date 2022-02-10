import React from 'react';
import styles from "./CompletedOrders.module.scss";
import { connect } from 'react-redux';
import Item from './Item/Item'

const CompletedOrders = props => {

    const completedOrdersList = props.completedOrdersList;

    const listOrderHandler = () => {
        return completedOrdersList.map((item, index) => (
            <Item key={index} itemData={item} />
        ))
    };

    return (
        <div className={styles.continer}>
            <div className={styles.item}>
                <h3>Completed orders</h3>
                {listOrderHandler()}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        completedOrdersList: state.completedOrdersList,
    }
}
export default connect(mapStateToProps, {})(CompletedOrders);