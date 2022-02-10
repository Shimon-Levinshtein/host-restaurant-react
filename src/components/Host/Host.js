import React from 'react';
import styles from "./Host.module.scss";
import { connect } from 'react-redux';
import waiterSvg from "./svg/waiter-svgrepo-com.svg";

const Host = props => {

   

    return (
        <div className={styles.continer}>
            <img src={waiterSvg}></img>
            <h1>HOST</h1>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(Host);