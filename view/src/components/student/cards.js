import React from 'react';
import {Card, CardBody,
    CardTitle, CardText, CardImg, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {removeRent} from '../actions/rentActions';
const Cards = ({id, title, image, authorFirst, authorLast, authorID, dispatch}) =>(
    <Col xs="3" key={id}>
      
          <Card key={id} >
      
          <Link to={{pathname:`/book/${title}/${id}`, state:{
              name: true
          }}} > 
          <CardImg  top width="100%" src={image} /> </Link>
              <CardBody>
              < CardTitle> <CardText>{title}</CardText></ CardTitle>
                  <CardText>
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
                                                dispatch(removeRent({id}));
                                            }}
                                            >RETURN</DropdownItem>  
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                  </CardText>                       
              </CardBody>
          </Card> 
      
      </Col> 

);

export default connect()(Cards);