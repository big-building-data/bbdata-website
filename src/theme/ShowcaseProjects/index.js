import React from 'react';
import styles from './styles.module.css';
import {Image, Row} from "react-bootstrap";

const Project = (props) => (
    <div className={styles.Item}>
        <Row className={styles.Image}>
            <Image src={props.image}/>
        </Row>
        <Row className={styles.Desc}>
            <h2 className={styles.Title}>{props.title}</h2>
            <h3 className={styles.Subtitle}>{props.subtitle}</h3>
            <p className={styles.Text}>{props.text}</p>
            <a href={props.link} target='_blank' className={styles.Link}>Link to Project</a>
        </Row>
    </div>
);

export default Project;
