import React from "react";
import styles from "./styles.module.css";

import {Col, Image, Row} from "react-bootstrap";

import Buttons from "../Button/index";

const Contact = (props) => (
    <div className={styles.Contact}>
        <Row>
            <Col>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Row>
                    <Buttons isOnBanner={2}/>
                </Row>
            </Col>

            <Col>
                <Image src="../../../static/img/icosys-white.png" alt="iCoSys" className={styles.Logo}/>
            </Col>
        </Row>
    </div>
);

export default Contact;
