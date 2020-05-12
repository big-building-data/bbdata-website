import React from 'react'
import styles from './styles.module.css'

import {Col, Image, Row} from "react-bootstrap";

const FeatureRight = (props) => (
    <div className={styles.Right}>
        <Row className={styles.Row}>
            <Col xs={{span: 12, order: 12}} sm={{span: 6, order: 1}} md={{span: 6, order: 1}} lg={{span: 6, order: 1}} xl={{span: 6, order: 1}}>
                <div className={styles.Text}>
                    <h2 className={"h2"}>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </Col>
            <Col xs={{span: 12, order: 1}} sm={{span: 6, order: 12}} md={{span: 6, order: 12}} lg={{span: 6, order: 12}} xl={{span: 6, order: 12}}>
                <Image src={props.image_src} alt={props.image_alt} className={styles.Image}/>
            </Col>
        </Row>
    </div>
);


export default FeatureRight;
