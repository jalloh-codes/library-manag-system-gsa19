import React, {Component} from 'react';
import { connect }  from 'react-redux'
import {getStudents} from '../actions/studentActions'
import {getBooks} from '../actions/bookActions';
import Card from './card';
import {Container} from 'reactstrap'

class Student extends Component{

    componentDidMount(){
        this.props.getStudents();
        this.props.getBooks();
    }
    render(){
        return(
            <Container className="main-page">

            <div>
                <li>Registed Student List</li>
                <hr/>
                {
                    this.props.students.map((student) =>{
                        return <Card id={student.id}
                        fname={student.fname}
                            lname={student.lname}
                            studentID={student.studentID} key={student.id}/>
                    })
                }
            </div>
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