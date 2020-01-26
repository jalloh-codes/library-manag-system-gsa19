import React from 'react';
import  BookForm from './BookForm';
import { connect } from 'react-redux';
import {Container} from 'reactstrap';
import {editBook} from '../actions/bookActions'



const EditBook =(props) => {

    let url = window.location.pathname.split('/')
    let getID = url[url.length -1]
    let getTitle = (url[2])

    
    return(
    <Container>
        <div>
    <p>Update this Book info: {getTitle}</p>
        </div>
  
        <BookForm 
        onSubmitBook={(book) =>{
            props.dispatch(editBook(parseInt(getID), book))
            props.history.push('/')
        }}

        />
    </Container>
    );
};


const mapStateToProps = (state) =>{
    return{
        books: state
    }
}

export default connect(mapStateToProps)(EditBook);