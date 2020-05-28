import React from "react";
import styles from "./styles.module.css";

import {Button} from "react-bootstrap";

const PrimaryWhite = (props) => (
    <Button variant="primary" className={styles.PrimaryWhite} href={props.link}>{props.text}</Button>
);

const SecondaryViolet = (props) => (
    <Button variant="outline-primary" className={styles.SecondaryViolet} href={props.link}>{props.text}</Button>
);

const PrimaryDark = (props) => (
    <Button variant="primary" className={styles.PrimaryDark} href={props.link} target={"blank"}>{props.text}</Button>
);

const SecondaryDark = (props) => (
    <Button variant="outline-primary" className={styles.SecondaryDark} href={props.link}>{props.text}</Button>
);

const PrimaryViolet = (props) => (
    <Button variant="primary" className={styles.PrimaryViolet} href={props.link} target={"blank"}>{props.text}</Button>
);

const SecondaryWhite = (props) => (
    <Button variant="outline-primary" className={styles.SecondaryWhite} href={props.link}>{props.text}</Button>
);

const PrimaryVioletSubmit = (props) => (
    <Button variant="primary" type="submit" className={styles.PrimaryVioletSubmit}>{props.text}</Button>
);

export default function Buttons(props) {
    const type = props.type;

    if (type === "PrimaryWhite") {
        return <PrimaryWhite btnType={type} text={props.text} link={props.link}/>
    } else if (type === "SecondaryViolet") {
        return <SecondaryViolet btnType={type} text={props.text} link={props.link}/>
    } else if (type === "PrimaryDark") {
        return <PrimaryDark btnType={type} text={props.text} link={props.link}/>
    } else if (type === "SecondaryDark") {
        return <SecondaryDark btnType={type} text={props.text} link={props.link}/>
    } else if (type === "PrimaryViolet") {
        return <PrimaryViolet btnType={type} text={props.text} link={props.link}/>
    } else if (type === "SecondaryWhite") {
        return <SecondaryWhite btnType={type} text={props.text} link={props.link}/>
    } else if (type === "PrimaryVioletSubmit") {
        return <PrimaryVioletSubmit btnType={type} text={props.text}/>
    }
}
