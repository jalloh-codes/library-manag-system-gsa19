import  React, {Component} from 'react';
import AuthorCard from  './cards';
import {Container} from 'reactstrap'
import { connect }  from 'react-redux'
import {getBooks} from '../actions/bookActions';

class  AuthorList extends Component{

    componentDidMount(){
        this.props.getBooks()
    }
    render(){   
    return(
        <Container>
        <div>
            {this.props.books.map((book) =>
                  <AuthorCard 
                    id={book.id}
                        authorID={book.authorID}
                     authorFirst={book.authorFirst}
                    authorLast={book.authorLast}
                    key={2}
                   />  
            )} 
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


export default connect(mapStateToProps, {getBooks})(AuthorList)