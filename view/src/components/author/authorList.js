import  React from 'react';
import AuthorCard from  './cards';
import {Container} from 'reactstrap'
import { connect }  from 'react-redux'

const AuthorList = (props) =>{
    return(
        <Container>
        <div>
            {props.books.map((book) =>
        
                  <AuthorCard 
                    id={book.id}
                    authorFirst={book.authorFirst}
                    authorLast={book.authorLast}
                  />  
            )} 
        </div>
        </Container>
    );
}


const mapStateToProps = (state) =>{  
    console.log(state);   
    return{
        books: state
    }
}

export default connect(mapStateToProps)(AuthorList);