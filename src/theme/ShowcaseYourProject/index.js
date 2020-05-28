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
            <Buttons type={"PrimaryViolet"}
                     text={props.btnTextPrimaryViolet}
                     link={props.linkPrimaryViolet}
            />
            <Buttons type={"SecondaryWhite"}
                     text={props.btnTextSecondaryWhite}
                     link={props.linkSecondaryWhite}
            />
        </Col>
        </Row>
    </div>

);

export default yourProject;
