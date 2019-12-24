import  React from 'react';
import BookCard from  './cards'
import { connect }  from 'react-redux'
import BookModal from './BookModal';
import { Container, Row  } from 'reactstrap';

const BookList = (props) =>(
    
    <Container className="booklist">
        <div className="addBook" >
            <BookModal />
            
        </div>
        <Row key={1}>
            {props.books.map((book) =>
                <BookCard id={book.id}
                    title={book.title}
                    image={book.image}                 
                    authorFirst={book.authorFirst}
                    authorLast={book.authorLast}
                     />
            )}
            
        </Row>
    </Container>
);



const mapStateToProps = (state) =>{
   
    
    return{
        books: state
    }
}

export default connect(mapStateToProps)(BookList);

