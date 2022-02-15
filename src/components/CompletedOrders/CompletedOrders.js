import React from 'react';
import styles from "./CompletedOrders.module.scss";
import { connect } from 'react-redux';
import Item from './Item/Item';
import DownloadJSON from './DownloadJSON/DownloadJSON'

const CompletedOrders = props => {

    const completedOrdersList = props.completedOrdersList;
    const listOrderHandler = () => {
        return completedOrdersList.map((item, index) => (
            <div key={index}>
                {item.status === 'end' && <Item itemData={item} />}
            </div>
        ))
    };

    return (
        <div className={styles.continer}>
            <DownloadJSON />
            <div className={styles.item}>
                <h3>Completed orders</h3>
                <div id="sukkotList-contining-items-style-15" className={styles.scrollBlock}>
                    {listOrderHandler()}
                </div>
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