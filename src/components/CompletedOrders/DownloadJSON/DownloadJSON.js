import React, { useEffect } from 'react';
import styles from "./DownloadJSON.module.scss";
import { connect } from 'react-redux';

const DownloadJSON = props => {

    const completedOrdersList = props.completedOrdersList;
    useEffect(() => {
    }, []);
    const json = JSON.stringify({ myData: 'asd' });
    const blob = new Blob([json], { type: 'application/json' });
    console.log(blob);

    return (
        <div className={styles.continer}>
            {/* <a ref={blob} >############</a> */}
            <button
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    blob
                )}`}
                download="filename.json"
            >
                {`Download Json`}
            </button>
            <button
                type="button"
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify({ myData: 'asd' })
                )}`}
                download="filename.json"
            >
                {`Download Json`}
            </button>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        completedOrdersList: state.completedOrdersList,
    }
}
export default connect(mapStateToProps, {})(DownloadJSON);
