import React from 'react'
import styles from './styles.module.css'

import {Col, Image, Row} from "react-bootstrap";

import Buttons from '../Button/index';

const HomeBanner = (props) => (
    <div className={styles.HomeBanner}>
        <Row className={styles.Row}>
            <Col xl={{span: 6, order: 1}} lg={{span: 6, order: 1}} md={{span: 6, order: 1}} sm={{span: 6, order: 1}} xs={{span: 12, order: 12}} className={styles.Text}>
                <Row className={styles.Row}>
                    <Col>
                        <h1 className={"h1 "+styles.HeroTitle}>{props.title}</h1>
                        <p className={styles.HeroDescription}>{props.text}</p>
                    </Col>
                </Row>

                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Buttons type={"PrimaryWhite"} text={props.btnTextPrimary} link={props.linkPrimary}/>
                        <Buttons type={"SecondaryViolet"} text={props.btnTextSecondary} link={props.linkSecondary} />
                    </Col>
                </Row>
            </Col>
            <Col xl={{span: 6, order: 12}} lg={{span: 6, order: 12}} md={{span: 6, order: 12}} sm={{span: 6, order: 12}} xs={{span: 12, order: 1}} className={styles.Col}>
                <Image src={props.image_src} alt={props.image_alt} className={styles.Image}/>
            </Col>
        </Row>
    </div>
);

export default HomeBanner;
