import React from 'react';
import styles from "./ToolTop.module.scss";
import { connect } from 'react-redux';

const ToolTop = props => {

    const tibelData = props.tibelData;
    return (
        <div className={styles.continer} style={{ display: props.displayToolTop ? 'block' : 'none' }}>
            <div className={styles.text_continer}>
                <div className={styles.arrow} />
                {tibelData.Mobile && <div className={styles.text}>
                    Mobile: {tibelData.Mobile}
                </div>}
                {tibelData.someDiners && <div className={styles.text}>
                    Diners: {tibelData.someDiners}
                </div>}
               {tibelData.startTimetamp && <div className={styles.text}>
                    Start time: {tibelData.startTimetamp.toISOString().substr(11, 8)}:
                </div>}
                <div className={styles.text}>
                    Table: {tibelData.Table}
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(ToolTop);