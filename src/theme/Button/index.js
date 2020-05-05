import React from "react";
import styles from "./styles.module.css";

import {Button} from "react-bootstrap";

const BannerBtn = (props) => (
    <div className={styles.Cont}>
        <Button variant="primary" href="../../../docs/get_started" className={styles.BannerButton}>Get Started</Button>
        <Button variant="outline-primary" href={'#Contact'} className={styles.BannerButtonLight}>Contact Us</Button>
    </div>
);

const ContactBtn = (props) => (
    <div>
        <Button variant="primary" href={'https://icosys.ch/'} target={"blank"} className={styles.ContactButton}>Go To iCoSys</Button>
        <Button variant="outline-primary" className={styles.ContactButtonLight}>Contact Us</Button>
    </div>
);

const ShowcaseBtn = (props) => (
    <div>
        <Button href={'https://icosys.ch/'} target={"blank"} variant="primary" className={styles.ShowcaseButton}>Go To iCoSys</Button>
        <Button variant="outline-primary" className={styles.ShowcaseButtonLight}>Contact Us</Button>
    </div>
);

export default function Buttons(props) {
    const isOnBanner = props.isOnBanner;
    if (isOnBanner === 1) {
        return <BannerBtn Banner={isOnBanner}/>;
    } else if (isOnBanner === 2) {
        return <ContactBtn Banner={isOnBanner}/>;
    } else if (isOnBanner === 3) {
        return <ShowcaseBtn Banner={isOnBanner}/>;
    }
}
