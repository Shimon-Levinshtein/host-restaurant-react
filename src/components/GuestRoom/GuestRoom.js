import React from 'react';
import styles from "./GuestRoom.module.scss";
import { connect } from 'react-redux';
import CreatTeable from './CreatTeable/CreatTeable';

const GuestRoom = props => {

    const tablesList = props.tablesList;
    // console.table(tablesList)

    const tibelsHandler = () => {
        return tablesList.map((tibel, index) => (
            <CreatTeable tibelData={tibel} />
        ))
    };

    return (
        <div className={styles.continer}>
            <div className={styles.guest_room}>
                {tibelsHandler()}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        tablesList: state.tablesList,
    }
}
export default connect(mapStateToProps, {})(GuestRoom);