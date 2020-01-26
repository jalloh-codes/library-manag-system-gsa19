import React from 'react';
import {Card, CardBody,
    CardTitle, CardText, CardImg, Col, CardSubtitle,
    UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {removeBook} from '../actions/bookActions';
const BookCard = ({id, title, authorFirst, authorLast, image, authorID, dispatch}) =>(

         
                
                    <Col xs="3" key={id}>
                    
                        <Card key={id} >
                        <Link to={{pathname:`/book/${title}/${id}`, state:{
                            name: true
                        }}} > 
                        <CardImg  top width="100%" src={image} /> </Link>
                            <CardBody>
                            <CardTitle> <CardText>{title}</CardText></CardTitle>
                                <CardSubtitle>
                                    <Link to={{pathname:`/author/${authorFirst}/${authorLast}/${authorID}`}}> By: 
                                        <small>{authorFirst} {authorLast}.</small> 
                                    </Link> 
                                    <UncontrolledButtonDropdown className="arrow" >
                                        <DropdownToggle caret>
                                            
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem
                                            className="remove-btn" 
                                            color="danger"
                                            size="sm"
                                            onClick={() =>{
                                                dispatch(removeBook({id}));
                                            }}
                                            >DELETE</DropdownItem>
                                            <DropdownItem>EDIT</DropdownItem>
                                            
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </CardSubtitle>                       
                            </CardBody>
                        </Card> 
                    
                    </Col>
                
                
            
);

export default connect()(BookCard);