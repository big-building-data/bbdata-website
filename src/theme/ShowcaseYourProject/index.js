import React from 'react';
import styles from './styles.module.css';

import {Col, Row} from "react-bootstrap";

import Buttons from '../Button/index';

const yourProject = (props) => (
    <div className={styles.Contact}>
        <h2 className={styles.Title}>{props.title}</h2>
        <Row className={styles.Items}>
        <Col>
            <p>{props.text}</p>
        </Col>
        <Col>
            <Buttons isOnBanner={3}/>
        </Col>
        </Row>
    </div>

);

export default yourProject;
