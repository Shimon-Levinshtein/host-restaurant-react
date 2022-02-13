import React, { useEffect, useState } from 'react';
import styles from "./CreatTeable.module.scss";
import { connect } from 'react-redux';
import ToolTop from './ToolTop/ToolTop';

const CreatTeable = props => {
    const status = props.status;
    const tibelData = props.tibelData;
    const [shape, setShape] = useState(styles.round);
    const [styleDivTable, setStyleDivTable] = useState({});
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
    }, [tibelData]);

    useEffect(() => {
        switch (status) {
            case 'start':
                if (tibelData.Diners === 3) {
                    setStyleDivTable({borderBottomColor: 'red'});
                } else {
                    setStyleDivTable({backgroundColor: 'red'});
                };
                break;
            // case 'start':
            //     setStyleDivTable(styleTable(tibelData.Diners)); /// orange
            //     break;
            default:
                break;
        };
    }, [status])

    return (
        <div className={styles.continer}>
            <ToolTop tibelData={tibelData} />
            <div className={shape} style={styleDivTable}>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(CreatTeable);