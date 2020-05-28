import React from "react";
import styles from "./styles.module.css";

import {Col, Image, Row} from "react-bootstrap";

import Buttons from "../Button/index";

const Contact = (props) => (
    <div className={styles.Contact}>
        <Row>
            <Col lg={{span: 8}}>
                <h2 className={"h2"}>{props.title}</h2>
                <p>{props.text}</p>
                <Row className={styles.BtnRow}>
                    <Buttons type={"PrimaryDark"} text={props.btnTextPrimaryDark} link={props.linkPrimaryDark}/>
                    <Buttons type={"SecondaryDark"} text={props.btnTextSecondaryDark} link={props.linkSecondaryDark}/>
                </Row>
            </Col>

            <Col lg={{span: 4}}>
                <Image src={props.image_src} alt={props.image_alt} className={styles.Logo}/>
            </Col>
        </Row>
    </div>
);

export default Contact;
