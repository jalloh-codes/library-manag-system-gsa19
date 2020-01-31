import React from 'react';
import {CardBody,
    CardTitle, CardText, CardImg, CardSubtitle,
    UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {removeBook} from '../actions/bookActions';
const BookCard = ({id, title, authorFirst, authorLast, image, authorID, dispatch}) =>(

                        <div className="cards" key={id} >
                        <CardImg  top width="100%" src={image} /> 
                            <CardBody>
                                <Link to={{pathname:`/book/${title}/${id}`}} > 
                                 <CardTitle> <CardText>{title}</CardText></CardTitle></Link>
                                <CardText>
                                    <Link 
                                    to={{pathname:`/author/${authorFirst}/${authorLast}/${authorID}`}}>
                                         By: <small>{authorFirst} {authorLast}.</small> 
                                    </Link> 
                                </CardText>               
                            </CardBody>
                            <UncontrolledButtonDropdown className="arrow">
                                <DropdownToggle caret></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem
                                        className="remove-btn" 
                                        color="danger" size="sm"
                                        onClick={() =>{}}>DELETE
                                    </DropdownItem>
                                    <DropdownItem>EDIT</DropdownItem>                                  
                                </DropdownMenu>
                                </UncontrolledButtonDropdown>        
                        </div> 
                
                
            
);

export default connect()(BookCard);