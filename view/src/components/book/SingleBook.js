import React from 'react';
import { CardBody, 
    CardTitle, CardText, CardImg, CardSubtitle, Row} from 'reactstrap';
import { connect } from 'react-redux';
import  Rent from './Rent';
import Return from '../student/Return';
const SingleBook = ({id, title, descriptio,  image, authorID, authorFirst, authorLast, published, booknum }) =>(

    <div key={id}>
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
                        <small className="delete">
                        <Return id={id} booknum={booknum} />
                        </small>
                        <small className="update">
                            <Rent booknum={booknum} id={id} />
                        </small>
            </CardBody>
        </div>
        </div>
        </Row>
    </div>
);

export default connect()(SingleBook);