import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";

import styles from "./styles.module.css";

import Buttons from '../Button/index';

import {Col, Form, FormControl, FormLabel, FormText} from "react-bootstrap";

function ContactForm(props) {
    const { register, handleSubmit, errors } = useForm({validateCriteriaMode: "all"});

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className={styles.FormSection}>
            <Form onSubmit={handleSubmit(onSubmit)} name="Contact" method="POST" data-netlify="true">
                <Form.Row className={styles.FormRow}>
                    <Col lg={1}>
                        <FormLabel column={0}>{props.name}</FormLabel>
                    </Col>
                    <Col lg={11}>
                        <FormControl type="text" placeholder="Enter Name" name="Name" ref={register({required: "Input required"})} className={styles.Input} />
                        <ErrorMessage name="Name" errors={errors} />
                    </Col>
                </Form.Row>

                <Form.Row className={styles.FormRow}>
                    <Col lg={1}>
                        <FormLabel column={0}>{props.email}</FormLabel>
                    </Col>
                    <Col lg={11}>
                        <FormControl
                            type="email"
                            placeholder="Enter E-Mail address"
                            name="Email"
                            ref={register({
                                required: "Input required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid Email address",
                                },
                            })}
                            className={styles.Input}
                        />
                        <ErrorMessage name="Email" errors={errors} >
                            {({ messages }) =>
                            messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        </ErrorMessage>
                        <FormText>{props.text}</FormText>
                    </Col>
                </Form.Row>

                <Form.Row className={styles.FormRow}>
                    <Col lg={1}>
                        <FormLabel column={0}>{props.message}</FormLabel>
                    </Col>
                    <Col lg={11}>
                        <FormControl as="textarea" rows="5" name="Message" ref={register({required: "Input required"})} className={styles.Input}/>
                        <ErrorMessage name="Message" errors={errors} />
                    </Col>
                </Form.Row>

                <Form.Row className={styles.Button}>
                    <Buttons type={"PrimaryVioletSubmit"}
                             text={props.btnTextPrimaryVioletSubmit}
                    />
                </Form.Row>

            </Form>
        </div>
    )
}

export default ContactForm;
