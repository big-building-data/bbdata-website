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
    <div className={styles.Contact}>
        <Button variant="primary" href={'https://icosys.ch/'} target={"blank"} className={styles.ContactButton}>Go To iCoSys</Button>
        <Button variant="outline-primary" className={styles.ContactButtonLight} href="">Contact Us</Button>
    </div>
);

const ShowcaseBtn = (props) => (
    <div>
        <Button href={'https://icosys.ch/'} target={"blank"} variant="primary" className={styles.ShowcaseButton}>Go To iCoSys</Button>
        <Button variant="outline-primary" className={styles.ShowcaseButtonLight}>Contact Us</Button>
    </div>
);

const SubmitBtn = (props) => (
        <Button variant="primary" type="submit" className={styles.SubmitButton}>Submit</Button>
);

export default function Buttons(props) {
    const type = props.type;
    if (type === "HomeBanner") {
        return <BannerBtn btnType={type}/>;
    } else if (type === "HomeContact") {
        return <ContactBtn btnType={type}/>;
    } else if (type === "ShowcaseContact") {
        return <ShowcaseBtn btnType={type}/>;
    } else if (type === "SubmitBtn") {
        return <SubmitBtn btnType={type}/>
    }
}
