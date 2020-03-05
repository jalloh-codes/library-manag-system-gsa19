import React from 'react'
import {  Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {removeStudent} from '../actions/studentActions'
import { connect } from 'react-redux';
const Card = ({id, fname, lname, studentID, dispatch}) =>{

        return(
            <tr key={id}>
                <td>
                    <Link to={{ pathname:`/students/${fname}/${lname}/${studentID}`}}>
                        {fname}
                    </Link>
                </td>
                <td>
                <Link to={{ pathname:`/students/${fname}/${lname}/${studentID}`}}>
                        {lname}
                    </Link>
                </td>
                <td>
                    {studentID}
                </td>
                <td>
                <Button
                        className="remove-btn" color="danger" size="sm"
                         onClick={() =>{ dispatch(removeStudent({id}));
                         }}>&times;
                     </Button> 
                </td>
            </tr>
        );
}

export default connect()(Card);