import React, { useEffect, useState } from 'react';
import styles from "./CreatTeable.module.scss";
import { connect } from 'react-redux';
import ToolTop from './ToolTop/ToolTop';
import { endOrderCard } from '../../../actions/completedOrders';
import { changeTableStatus } from '../../../actions/table';


const CreatTeable = props => {
    const status = props.status;
    const tibelData = props.tibelData;
    if (tibelData.Status !== "empty") console.log(tibelData);
    const [shape, setShape] = useState(styles.pentagon);
    const [styleDivTable, setStyleDivTable] = useState({});
    const [displayToolTop, setDisplayToolTop] = useState(false);

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
                    setStyleDivTable({ borderBottomColor: 'red' });
                } else {
                    setStyleDivTable({ backgroundColor: 'red' });
                };
                setTimeout(() => {
                    if (tibelData.Diners === 3) {
                        setStyleDivTable({ borderBottomColor: 'orange' });
                    } else {
                        setStyleDivTable({ backgroundColor: 'orange' });
                    };
                }, 60000);
                setTimeout(() => {
                    if (tibelData.Diners === 3) {
                        setStyleDivTable({ borderBottomColor: 'aqua' });
                    } else {
                        setStyleDivTable({ backgroundColor: 'aqua' });
                    };
                    props.endOrderCard(tibelData.Table)
                    props.changeTableStatus({ 
                        id: tibelData.Table, 
                        status: 'empty',
                        data: {
                            Mobile: false,
                            startTimetamp: false,
                            someDiners: false,
                        },
                    })
                }, 90000);
                break;
            default:
                break;
        };
    }, [status]);



    return (
        <div 
        className={styles.continer} 
        onClick={() => setDisplayToolTop(!displayToolTop)}
        onMouseOut={() => setDisplayToolTop(false)}
        >
            <ToolTop tibelData={tibelData} displayToolTop={displayToolTop}/>
            <div className={shape} style={styleDivTable}>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { endOrderCard, changeTableStatus })(CreatTeable);