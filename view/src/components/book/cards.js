import React from 'react';
import {Card, CardBody, CardDeck,
    CardTitle, CardText, CardImg, Col, NavLink} from 'reactstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
const BookCard = ({id, title,  image, authorFirst, authorLast }) =>(
        <Col xs={{ size:3 }}>
            {/* <CardDeck> */}
                <Card  key={id}>
                <Link to={`/book/${title}/${id}`} > 
                <CardImg  top width="100%" src={image} /> </Link>
                    <CardBody>
                    <CardText> <CardTitle>{title}</CardTitle></CardText>
                        <CardText>
                            <Link to={`/author/${authorFirst}${authorLast}`}> By: 
                                <small>{authorFirst} {authorLast}.</small> 
                            </Link>                 
                        </CardText>                       
                    </CardBody>
                </Card>
            {/* </CardDeck> */}
        </Col>
);

export default connect()(BookCard);