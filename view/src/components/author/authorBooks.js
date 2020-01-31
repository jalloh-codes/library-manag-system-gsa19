import  React, {Component} from 'react';
import BookCard from  '../book/cards'
import {Container} from 'reactstrap'
import { connect }  from 'react-redux'
import {getBooks} from '../actions/bookActions';
import {getAuthors} from '../actions/authorActions'

class  AuthorBooks extends Component{

    componentDidMount(){
        this.props.getBooks();
        this.props.getAuthors();
    }
    arthID = window.location.pathname.split('/').slice(-1)[0]

    render(){
        return(
            <Container className="main-page">  
                <hr/>
                              
            <div className="rows">
            {
                this.props.books.map((book) =>
                this.props.authors.map((author) => {
                    return(parseInt(book.authorID) === parseInt(this.arthID) && 
                    parseInt(author.authorID) === parseInt(book.authorID))?
                        <BookCard image={book.image} 
                                        authorFirst={author.authorFirst}
                                        authorLast={author.authorLast}
                                        title={book.title} 
                                        id={book.id}
                                        key={book.id}
                        /> : null
                    }))
            } 
            </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,
        authors: state.authorReducer
    }
}


export default connect(mapStateToProps, {getBooks, getAuthors})(AuthorBooks)