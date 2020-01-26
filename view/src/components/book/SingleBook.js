import React from 'react';
import {Container, CardBody, 
    CardTitle, CardText, CardImg, CardSubtitle, Row} from 'reactstrap';
import { connect } from 'react-redux';
import  Rent from './Rent';


const SingleBook = ({id, title, descriptio,  image, authorID, authorFirst, authorLast, published, booknum,  dispatch }) =>(
<Container>
    
    <div className="main" key={id}>
        <Row>
        <div className="book">
            
        <div key={id} className="img">
            <CardImg className="bookImg"  src={image} />
            
        </div>
        
        <div className="bookInfo">
        
            <CardBody>
                <CardTitle>Tiitle: {title}</CardTitle>
                <CardText>By: <small> {authorFirst} {authorLast} </small> </CardText>
                <CardText>{authorID}</CardText>
                <CardSubtitle>published Date: {published}</CardSubtitle>

                <CardText> Description: {descriptio}</CardText>
                <CardText>ISBN: {booknum}</CardText>
                <Rent booknum={booknum}/>

            </CardBody>
        </div>
        </div>
        </Row>
    </div>
    </Container>
);

export default connect()(SingleBook);