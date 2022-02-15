import React, { useEffect, useState } from 'react';
import styles from "./CreatTeable.module.scss";
import "./CreatTeable.scss";
import { connect } from 'react-redux';
import ToolTop from './ToolTop/ToolTop';
import { endOrderCard } from '../../../actions/completedOrders';
import { changeTableStatus } from '../../../actions/table';


const CreatTeable = props => {
    const status = props.status;
    const tableData = props.tableData;
    const [shape, setShape] = useState(styles.pentagon);
    const [styleDivTable, setStyleDivTable] = useState({});
    const [displayToolTop, setDisplayToolTop] = useState(false);

    useEffect(() => {
        switch (tableData.Diners) {
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
    }, [tableData]);

    useEffect(() => {
        switch (status) {
            case 'start':
                if (tableData.Diners === 3) {
                    setStyleDivTable({ borderBottomColor: 'red' });
                } else {
                    setStyleDivTable({ backgroundColor: 'red' });
                };
                setTimeout(() => {
                    if (tableData.Diners === 3) {
                        setStyleDivTable({ borderBottomColor: 'orange' });
                    } else {
                        setStyleDivTable({ backgroundColor: 'orange' });
                    };
                }, 60000);
                setTimeout(() => {
                    if (tableData.Diners === 3) {
                        setStyleDivTable({ borderBottomColor: 'rgb(184, 184, 184)' });
                    } else {
                        setStyleDivTable({ backgroundColor: 'rgb(184, 184, 184)' });
                    };
                    props.endOrderCard(tableData.Table)
                    props.changeTableStatus({
                        id: tableData.Table,
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
            className={styles.continer  + ' ' + 'table' + ' ' + 'table-' + tableData.Table}
            onClick={() => setDisplayToolTop(!displayToolTop)}
            onMouseOut={() => setDisplayToolTop(false)}
        >
            <div className={styles.continingToolTop}>
                <ToolTop tableData={tableData} displayToolTop={displayToolTop} />
            </div>
            <div className={shape} style={styleDivTable}>
                {tableData.Table}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { endOrderCard, changeTableStatus })(CreatTeable);