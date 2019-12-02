import React from 'react';
import {Card, CardBody, CardDeck,
    CardTitle, CardText, CardImg, Col, NavLink} from 'reactstrap';
import { connect } from 'react-redux';

const BookCard = ({id, title,  image, author, dispatch }) =>(
        <Col xs={{ size:3 }}>
            <CardDeck>
            
            <Card key={id}>
            <NavLink href={`/book/${title}/${id}`} > <CardImg src={image} /> </NavLink>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>
                        <NavLink><small>{author}</small></NavLink>                       
                    </CardText>
                        
                </CardBody>
                
                
            </Card>
            
            </CardDeck>
        </Col>
);

export default connect()(BookCard);