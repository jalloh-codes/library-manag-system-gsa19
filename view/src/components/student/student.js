import React, {Component} from 'react';
import { connect }  from 'react-redux'
import {getStudents} from '../actions/studentActions'
import {getBooks} from '../actions/bookActions';
import Card from './card';
import {Container, Table} from 'reactstrap'
import {Link} from 'react-router-dom';
class Student extends Component{

    componentDidMount(){
        this.props.getStudents();
        this.props.getBooks();
    }
    render(){
        return(
            <Container className="main-page">
                <hr/>
                <div><p><span>Student List.</span>
                <Link to={{pathname:`/sign`}}> Sign in </Link>if you have have not registed already.</p>
                </div>
            <Table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>ID#</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                    this.props.students.map((student) =>{
                        return <Card id={student.id}
                        fname={student.fname}
                            lname={student.lname}
                            studentID={student.studentID} key={student.id}/>
                    })
                }
            </tbody>
            </Table>
            </Container>
        );
    }
}


const mapStateToProps = (state) =>{
    return{
        students: state.studentReducer,
        books: state.bookReducer
    }
}


export default connect(mapStateToProps, {getStudents, getBooks})(Student)