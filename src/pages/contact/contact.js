import React from "react";
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {contact} from "../../../pages/contact";
import styles from "./styles.module.css";

import Banner from '../../theme/ShowcaseBanner';
import Form from '../../theme/ContactForm';

import {Col, Container, Row} from "react-bootstrap";

function ContactForm() {
    const {bannerContact, formSection} = contact;
    return(
        <Layout title="Contact Us">
            <Container fluid className={styles.ContC}>
                <Row className={styles.RowBanner}>
                    <Col className={styles.Banner}>
                        <Banner title={bannerContact.title} text={bannerContact.subtitle} />
                    </Col>
                </Row>

                <Row className={styles.Content} xl={12}>
                    <Container>
                        <Form name={formSection.Name} email={formSection.Email} text={formSection.Email_text} message={formSection.Message}/>
                    </Container>
                </Row>
            </Container>
        </Layout>
    );
}

export default ContactForm;
