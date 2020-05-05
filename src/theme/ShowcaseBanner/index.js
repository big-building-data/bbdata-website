import React from 'react';
import styles from './styles.module.css'
import {Row} from "react-bootstrap";

const Banner = (props) => (
    <div className={styles.Banner}>
        <Row className={styles.Row}>
            <h1 className={styles.Title}>{props.title}</h1>
            <p className={styles.Text}>{props.text}</p>
        </Row>
    </div>
);

export default Banner;
