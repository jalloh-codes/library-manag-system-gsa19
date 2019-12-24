import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
    
const AuthorCard = ({id, authorFirst, authorLast}) =>{
    return(
        <ListGroup>
            <ListGroupItem key={id}>
                <Link to={`/author/${authorFirst}${authorLast}`}>
                {authorFirst}, {authorLast} 
                </Link>
            </ListGroupItem>
        </ListGroup>
    );
};

export default AuthorCard;