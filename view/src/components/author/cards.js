import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import {removeAuthor} from '../actions/authorActions';
import { connect } from 'react-redux';

const AuthorCard = ({id, authorFirst, authorLast, authorID, dispatch}) =>{
    return(
           <tr key={id}>
                <td> 
                    <Link to={{ pathname:`/author/${authorFirst}/${authorLast}/${authorID}`}}>
                        {authorFirst}
                    </Link>
                </td>
                <td>
                    <Link to={{ pathname:`/author/${authorFirst}/${authorLast}/${authorID}`}}>
                        {authorLast}
                    </Link>
                </td>
                <td>{authorID}</td>
                <td>
                    <Button
                        className="remove-btn" color="danger" size="sm"
                         onClick={() =>{ dispatch(removeAuthor({id}));
                         }}>&times;
                     </Button> 
                </td>
            </tr>
    );
};

export default connect()(AuthorCard);