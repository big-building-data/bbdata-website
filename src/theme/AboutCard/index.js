import React from "react";
import styles from './styles.module.css';
import {Card, CardHeader, CardImg, CardBlock, CardTitle, CardText} from 'react-bootstrap-card';

const Cards = (props) => (
    <Card className={styles.Card}>
        <CardHeader className={styles.Header}>
            <CardImg variant="top" src={props.image} className={styles.Image}/>
        </CardHeader>
        <CardBlock className={styles.Content}>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.text}</CardText>
            <a href={props.link} target="_blank" className={styles.Link}>Go to institute</a>
        </CardBlock>
    </Card>
);

export default Cards;
