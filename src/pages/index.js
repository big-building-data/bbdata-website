import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollableAnchor from 'react-scrollable-anchor'

import HomeBanner from '../theme/HomeBanner';
import FeatureLeft from "../theme/HomeFeatureLeft";
import FeatureRight from "../theme/HomeFeatureRight";
import Contact from "../theme/HomeContact";

import {home} from '../../pages/home';

import {Container, Row} from "react-bootstrap";

function Home() {
    const {hero, firstFeature, secondFeature, thirdFeature, contact} = home;
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <HomeBanner
                    title={hero.title}
                    text={hero.text}
                    image_src={useBaseUrl(hero.image_src)}
                    image_alt={hero.image_alt}/>
            </header>
            <main>
                <Container>
                    <Row className={styles.Row}>
                        <FeatureLeft
                            title={firstFeature.title}
                            text={firstFeature.text}
                            image_src={useBaseUrl(firstFeature.image_src)}
                            image_alt={firstFeature.image_alt}/>
                    </Row>
                    <Row className={styles.Row}>
                        <FeatureRight
                            title={secondFeature.title}
                            text={secondFeature.text}
                            image_src={useBaseUrl(secondFeature.image_src)}
                            image_alt={secondFeature.image_alt}/>
                    </Row>
                    <Row className={styles.Row}>
                        <FeatureLeft
                            title={thirdFeature.title}
                            text={thirdFeature.text}
                            image_src={useBaseUrl(thirdFeature.image_src)}
                            image_alt={thirdFeature.image_alt}/>
                    </Row>
                    <ScrollableAnchor id={'Contact'}>
                        <Row className={styles.Content}>
                            <Contact title={contact.title} text={contact.text} email={contact.email}/>
                        </Row>
                    </ScrollableAnchor>
                </Container>
            </main>
        </Layout>
    );
}

/**
 *TODO
 *
 */

export default Home;
