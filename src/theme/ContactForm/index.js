import React from "react";
import styles from "./styles.module.css";

import Buttons from '../Button/index';

import {Col, Form, FormControl, FormLabel, FormText} from "react-bootstrap";

const ContactForm = (props) => (
    <div>
        <Form>
            <Form.Row className={styles.FormRow}>
                <Col lg={1}>
                    <FormLabel column={0}>{props.name}</FormLabel>
                </Col>
                <Col lg={11}>
                    <FormControl type="text" placeholder="Enter Name" required/>
                </Col>
            </Form.Row>

            <Form.Row className={styles.FormRow}>
                <Col lg={1}>
                    <FormLabel column={0}>{props.email}</FormLabel>
                </Col>
                <Col lg={11}>
                    <FormControl type="email" placeholder="Enter E-Mail address" required/>
                    <FormText>{props.text}</FormText>
                </Col>
            </Form.Row>

            <Form.Row className={styles.FormRow}>
                <Col lg={1}>
                    <FormLabel column={0}>{props.message}</FormLabel>
                </Col>
                <Col lg={11}>
                    <FormControl as="textarea" rows="5" required/>
                </Col>
            </Form.Row>

            <Form.Row className={styles.Button}>
                <Buttons type="SubmitBtn"/>
            </Form.Row>

        </Form>
    </div>
);

export default ContactForm;
