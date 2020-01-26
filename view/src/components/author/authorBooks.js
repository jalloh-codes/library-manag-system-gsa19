import  React, {Component} from 'react';
import BookCard from  '../book/cards'
import {Container} from 'reactstrap'
import { connect }  from 'react-redux'
import {getBooks} from '../actions/bookActions';

class  AuthorBooks extends Component{

    componentDidMount(){
        this.props.getBooks();
    }
    arthID = window.location.pathname.split('/').slice(-1)[0]

    render(){
        return(
            <Container>  
                              
            <div>
            {
                this.props.books.map((book) =>{
                    return(parseInt(book.authorID) === parseInt(this.arthID))?
                        <BookCard image={book.image} 
                                        authorFirst={book.authorFirst}
                                        uthorLast={book.authorLast}
                                        title={book.title} 
                                        id={book.id}
                                        key={book.id}
                        /> : null
                    
                })
            } 
            </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,
    }
}


export default connect(mapStateToProps, {getBooks})(AuthorBooks)