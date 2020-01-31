import React from 'react'
import { ListGroup, ListGroupItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {removeStudent} from '../actions/studentActions'
import { connect } from 'react-redux';
const Card = ({id, fname, lname, studentID, dispatch}) =>{

        return(
            <div>
                <div className="list-groups" key={id}>
                    <ListGroupItem key={id}>
                        <Link to={{pathname:`students/${fname}/${lname}/${studentID}`}}>
                        {fname}, {lname}
                        </Link>
                        <Button className="remove-btn delete" color="danger"
                            size="sm" onClick={() =>{
                            dispatch(removeStudent({id}));
                            }} > &times;</Button> 
                    </ListGroupItem>
                    
                </div>
            </div>
        );
}

export default connect()(Card);