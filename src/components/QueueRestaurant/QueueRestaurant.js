import React from 'react';
import styles from "./QueueRestaurant.module.scss";
import { connect } from 'react-redux';
import Queue from './Queue/Queue'

const QueueRestaurant = props => {

    const ordersList = props.ordersList;

    const listOrderHandler = () => {
        return ordersList.map((order, index) => (
            <Queue key={index} orderData={order} />
        ))
    };

    return (
        <div className={styles.continer}>
            <div className={styles.waiting_queue}>
                <h3>Waiting queue</h3>
                <div id="sukkotList-contining-items-style-15" className={styles.scrollBlock}>
                    {listOrderHandler()}
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        ordersList: state.ordersList,
    }
}
export default connect(mapStateToProps, {})(QueueRestaurant);