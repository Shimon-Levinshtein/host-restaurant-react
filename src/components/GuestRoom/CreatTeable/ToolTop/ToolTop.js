import React from 'react';
import styles from "./ToolTop.module.scss";
import { connect } from 'react-redux';

const ToolTop = props => {

    const tibelData = props.tibelData;
    console.log(tibelData);
    return (
        <div className={styles.continer}>
            <div className={styles.text_continer}>
                <div className={styles.arrow}/>
                <div className={styles.text}>
                    Table: {tibelData.Table}
                </div>
                <div className={styles.text}>
                    Diners: {tibelData.Diners}
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(ToolTop);