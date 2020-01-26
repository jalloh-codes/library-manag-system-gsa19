import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
    
const AuthorCard = ({id, authorFirst, authorLast, authorID}) =>{
    return(
        <ListGroup key={authorID}>
            <ListGroupItem key={id}>
                <Link to={{ pathname:`/author/${authorFirst}/${authorLast}/${authorID}`,
                        state:{
                            authorID: authorID
                        }
                }}>
                {authorFirst}, {authorLast}
                </Link>
            </ListGroupItem>
        </ListGroup>
    );
};

export default AuthorCard;