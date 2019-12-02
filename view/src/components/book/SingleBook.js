import React from 'react';
import {Container, CardBody, 
    CardTitle, CardText, CardImg, Button,
 NavLink, CardSubtitle, Row} from 'reactstrap';
import {removeBook} from '../actions/bookActions';
import { connect } from 'react-redux';


const SingleBook = ({id, title, descriptio,  image, author, published, booknum,  dispatch }) =>(
<Container>
    <div className="main">
        <Row>
        <div className="book">
            
        <div key={id} className="img">
            <CardImg className="bookImg"  src={image} />
            
        </div>
        
        <div className="bookInfo">
        
            <CardBody>
                <CardTitle>Tiitle: {title}</CardTitle>
                <CardText>By: <small> {author} </small> </CardText>
                <CardSubtitle>published Date: {published}</CardSubtitle>

                <CardText> Description: {descriptio}</CardText>
                <CardText>ISBN: {booknum}</CardText>

            </CardBody>
        </div>
        <div>
            <div>
                <Button
                className="remove-btn" 
                        color="danger"
                        size="sm"
                        onClick={() =>{
                            dispatch(removeBook({id}));
                        }}>
                        Delete
                </Button>
                <NavLink href={`/update/${title}/${id}`}>Edit</NavLink>
            </div>
        </div>
        </div>
        </Row>
    </div>
    </Container>
);

export default connect()(SingleBook);