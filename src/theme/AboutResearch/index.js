import React from "react";
import styles from './styles.module.css';
import {Col} from "react-bootstrap";

const Research = (props) => (
    <Col className={styles.Research}>
        <h1 className={styles.Title}>{props.title}</h1>
        <p>{props.text1}</p>
        <br/>
        <p>{props.text2}</p>
    </Col>
);

export default Research;
