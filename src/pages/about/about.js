import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {about} from '../../../pages/about';
import styles from './styles.module.css';

import Banner from '../../theme/ShowcaseBanner';
import Research from '../../theme/AboutResearch';
import Cards from '../../theme/AboutCard';

import {Container, Row, Col} from 'react-bootstrap';

function About() {
    const {bannerAbout, research, card1, card2, card3} = about;
    return (
        <Layout title="About">
            <Container fluid className={styles.ContA}>

                <Row className={styles.RowBanner}>
                    <Col className={styles.Banner}>
                        <Banner title={bannerAbout.title} text={bannerAbout.text}/>
                    </Col>
                </Row>

                <Row className={styles.Content} xl={12}>
                    <Container>

                        <Row className={styles.Research} xl={6}>
                            <Col className={styles.Col}>
                                <Research title={research.title} text1={research.text1} text2={research.text2}/>
                            </Col>
                        </Row>

                        <Row className={styles.Title} xl={12}>
                            <h1>Our Partners</h1>
                        </Row>
                        <Row className={styles.Partners}>
                            <Col xs={{span:10, offset:1}} sm={{span:10, offset:2}} md={{span:4, offset:0}} lg={{span:4, offset:0}} xl={{span:4, offset:0}}>
                                <Cards image={useBaseUrl(card1.image)} title={card1.title} text={card1.text} link={card1.link}/>
                            </Col>
                            <Col xs={{span:10, offset:1}} sm={{span:10, offset:2}} md={{span:4, offset:0}} lg={{span:4, offset:0}} xl={{span:4, offset:0}}>
                                <Cards image={useBaseUrl(card2.image)} title={card2.title} text={card2.text} link={card2.link}/>
                            </Col>
                            <Col xs={{span:10, offset:1}} sm={{span:10, offset:2}} md={{span:4, offset:0}} lg={{span:4, offset:0}} xl={{span:4, offset:0}}>
                                <Cards image={useBaseUrl(card3.image)} title={card3.title} text={card3.text} link={card3.link}/>
                            </Col>
                        </Row>
                    </Container>

                </Row>

            </Container>
        </Layout>
    );
}

export default About;
