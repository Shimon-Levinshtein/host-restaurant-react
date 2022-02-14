import React from 'react';
import styles from "./ToolTop.module.scss";
import { connect } from 'react-redux';

const ToolTop = props => {

    const tableData = props.tableData;
    return (
        <div className={styles.continer} style={{ display: props.displayToolTop ? 'block' : 'none' }}>
            <div className={styles.text_continer}>
                <div className={styles.arrow} />
                {tableData.Mobile && <div className={styles.text}>
                    Mobile: {tableData.Mobile}
                </div>}
                {tableData.someDiners && <div className={styles.text}>
                    Diners: {tableData.someDiners}
                </div>}
               {tableData.startTimetamp && <div className={styles.text}>
                    Start time: {tableData.startTimetamp.toISOString().substr(11, 8)}:
                </div>}
                <div className={styles.text}>
                    Table: {tableData.Table}
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(ToolTop);