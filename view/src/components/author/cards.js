import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
    
const AuthorCard = ({id, authorFirst, authorLast}) =>{
    return(
        <ListGroup>
            <ListGroupItem key={id}>{authorFirst}, {authorLast} </ListGroupItem>
        </ListGroup>
    );
};

export default AuthorCard;