import React from "react";
import styles from "./styles.module.css";

import {Col, Image, Row} from "react-bootstrap";

import Buttons from "../Button/index";

const Contact = (props) => (
    <div className={styles.Contact}>
        <Row>
            <Col className={styles.Col}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Row>
                    <Buttons type={"HomeContact"}/>
                </Row>
            </Col>

            <Col>
                <Image src={props.image_src} alt={props.image_alt} className={styles.Logo}/>
            </Col>
        </Row>
    </div>
);

export default Contact;
