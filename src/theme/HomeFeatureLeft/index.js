import React from 'react'
import styles from './styles.module.css'

import {Col, Image, Row} from "react-bootstrap";

const FeatureLeft = (props) => (
    <div className={styles.Left}>
        <Row className={styles.Row}>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <Image src={props.image_src} alt={props.image_alt} className={styles.Image}/>
            </Col>

            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <div className={styles.Text}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </Col>
        </Row>
    </div>
);

export default FeatureLeft;
