import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const LineItem = ({index, item, handleStrike}) => {
    const {label, strike} = item;

    return (
        <li className={strike ? styles.strikethrough : ''} onClick={() => handleStrike(index)}>{label}</li>
    );
}

export default LineItem;