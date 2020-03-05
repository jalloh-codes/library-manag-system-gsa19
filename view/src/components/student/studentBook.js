import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {getBooks} from '../actions/bookActions';
import {getStudents} from '../actions/studentActions'
import {getRents} from '../actions/rentActions'
import { connect } from 'react-redux';
import BookList from './bookCard';
import StudentInfo from './StudentInfo';
import {getAuthors} from '../actions/authorActions';
class StudentBooks extends Component{



    componentDidMount(){
        this.props.getBooks();
        this.props.getRents();
        this.props.getStudents();
        this.props.getAuthors()
    }

    
    data = this.props.books
    stuID = window.location.pathname.split('/').slice(-1)[0]


    getbooks = () => {
        let arrayBooks = []
        this.props.books.filter((book) =>{
            this.props.authors.filter((author) =>{
                try{
                    if(parseInt(book.authorID) === parseInt(author.authorID)){
                        let data ={id: book.id, title: book.title, image:book.image,
                            authorFirst:author.authorFirst, authorLast:author.authorLast,
                            authorID:book.authorID, booknum: book.booknum, 
                            descriptio:book.descriptio, published:book.published,
                            }
                    arrayBooks.push(data)
                    }else{
                        return null;
                    }
                }catch(err){
                    console.log({err: err});
                    
                }
            })
            
        })
        return arrayBooks; 
}

    render(){
        
        
        let students = this.props.students
        
        return(
            
                <Container className="main-page">  
                        <hr/>
                    <div className="rows">
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

                    <div className="rows">
                        <BookList 
                            books={this.getbooks()}
                            rents={this.props.rents}
                            
                            stuID={this.stuID}
                        />    
                    </div>
                </Container>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,
        rents: state.rentReducer, 
        authors: state.authorReducer,
        students: state.studentReducer

    }
}


export default connect(mapStateToProps, {getBooks, getRents, getStudents, getAuthors})(StudentBooks)