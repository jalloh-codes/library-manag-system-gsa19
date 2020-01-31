import React from 'react';
import {CardBody,
    CardTitle, CardText, CardImg, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {removeRent} from '../actions/rentActions';
const Cards = ({id, title, image, authorFirst, authorLast, authorID, dispatch}) =>(
      
          <div className="cards" key={id} >
          <CardImg  top width="100%" src={image} /> 
              <CardBody>
              <Link to={{pathname:`/book/${title}/${id}`}} > 
              <CardTitle> <CardText>{title}</CardText></ CardTitle></Link>
                  <CardText>
                      <Link to={{pathname:`/author/${authorFirst}/${authorLast}/${authorID}`}}>
                           By: <small>{authorFirst} {authorLast}.</small> 
                      </Link> 
                  </CardText>                       
              </CardBody>
              <UncontrolledButtonDropdown className="arrow" >
                    <DropdownToggle caret></DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                        className="remove-btn" 
                        color="danger" size="sm"
                        onClick={() =>{dispatch(removeRent({id}));
                        }}>RETURN</DropdownItem>  
                    </DropdownMenu>
               </UncontrolledButtonDropdown>
          </div> 

);

export default connect()(Cards);