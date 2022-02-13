import React from 'react';
import styles from "./GuestRoom.module.scss";
import { connect } from 'react-redux';
import CreatTeable from './CreatTeable/CreatTeable';

const GuestRoom = props => {

    const tablesList = props.tablesList;
    const tibelsHandler = () => {
        return tablesList.map((tibel, index) => (
            <CreatTeable key={index} tibelData={tibel} status={tibel.Status}/>
        ))
    };

    return (
        <div className={styles.continer}>
            <div className={styles.guest_room_title}>
                <h1>GUEST ROOM</h1>
            </div>
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