import React from 'react';
import styles from "./Item.module.scss";

const Item = props => {

    const itemData = props.itemData;


    return (
        <div className={styles.continer}>
           <div className={styles.text}> Mobile: {itemData.Mobile}</div>
           <div className={styles.text}> Diners: {itemData.Diners}</div>
        </div>
    );
};

export default Item;