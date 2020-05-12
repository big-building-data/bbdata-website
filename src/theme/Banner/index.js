import React from 'react';
import styles from './styles.module.css'
import {Row, Col} from "react-bootstrap";

const Banner = (props) => (
    <div className={styles.Banner}>
        <Row className={styles.Row}>
            <Col>
                <header className={styles.Content}>
                    <h1 className={"h1 "+styles.Title}>{props.title}</h1>
                    <p className={"s1 "+styles.Text}>{props.text}</p>
                </header>
            </Col>
        </Row>
    </div>
);

export default Banner;
