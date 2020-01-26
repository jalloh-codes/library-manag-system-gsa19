import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {getBooks} from '../actions/bookActions';
import {getStudents} from '../actions/studentActions'
import {getRents} from '../actions/rentActions'
import { connect } from 'react-redux';
import BookList from './bookCard';
import StudentInfo from './StudentInfo';

class StudentBooks extends Component{



    componentDidMount(){
        this.props.getBooks();
        this.props.getRents();
        this.props.getStudents();
    }

    
    data = this.props.books
    stuID = window.location.pathname.split('/').slice(-1)[0]




    render(){
        
        
        let students = this.props.students
        
        return(
            
            <Container>
                <div>
                    <div>
                        {students.map((student) => (parseInt(student.studentID)
                         === parseInt(this.stuID)) ?
                        <StudentInfo id={student.id}
                                    fname={student.fname}
                                    lname={student.lname}
                                    studentID={student.studentID}
                                    address={student.address}
                                    apt={student.apt}
                                    city={student.city}
                                    state={student.state}
                                    zipcode={student.zipcode}
                                    major={student.major}
                        /> : null)}
                    </div>

                    <div>
                        <BookList 
                            books={this.props.books}
                            rents={this.props.rents}
                            
                            stuID={this.stuID}
                        />    
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,
        rents: state.rentReducer, 
        students: state.studentReducer

    }
}


export default connect(mapStateToProps, {getBooks, getRents, getStudents})(StudentBooks)