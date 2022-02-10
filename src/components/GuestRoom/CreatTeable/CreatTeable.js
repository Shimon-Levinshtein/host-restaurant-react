import React, { useEffect, useState } from 'react';
import styles from "./CreatTeable.module.scss";
import { connect } from 'react-redux';

const CreatTeable = props => {

    const tibelData = props.tibelData;
    const [shape, setShape ] = useState(styles.round);
    useEffect(() => {
        switch (tibelData.Diners) {
            case 1:
                setShape(styles.round);
                break;
            case 2:
                setShape(styles.round_rectangle);
                break;
            case 3:
                setShape(styles.triangle_up);
                break;
            case 4:
                setShape(styles.square);
                break;
            case 5:
                setShape(styles.pentagon);
                break;
            default:
                break;
        };
    }, [tibelData])
    return (
        <div className={styles.continer}>
            <div className={shape}>
                {tibelData.Table}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(CreatTeable);