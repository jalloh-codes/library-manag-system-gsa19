import React from 'react';
import {CardBody,
    CardTitle, CardText, CardImg} from 'reactstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {removeBook} from '../actions/bookActions';
import EditBook from './EditBook';
const BookCard = ({id, title, booknum, authorFirst, authorLast, authorID,descriptio, published,image,dispatch}) =>(

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
                <small className="delete" onClick={() =>{
                        dispatch(removeBook({id}))
                    }}>DELETE</small>
                 <EditBook id={id}
                    title={title} authorID={authorID} booknum={booknum}
                    published={published} descriptio={descriptio} image={image}/> 
        </CardBody>
    </div> 
);

export default connect()(BookCard);