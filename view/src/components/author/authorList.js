import  React, {Component} from 'react';
import AuthorCard from  './cards';
import {Container, Table} from 'reactstrap'
import { connect }  from 'react-redux'
import {getAuthors} from '../actions/authorActions';
import {getBooks} from '../actions/bookActions';

class  AuthorList extends Component{

    componentDidMount(){
        this.props.getAuthors()
        this.props.getBooks();
    }

    render(){   
        
    return(
        <Container className="main-page">
            <li>
                Authors Details
            </li>
        <Table style={{color: 'aliceblue'}}>
        <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>ID#</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {this.props.authors.map((author) =>
                  <AuthorCard 
                    id={author.id}
                     authorID={author.authorID}
                     authorFirst={author.authorFirst}
                     authorLast={author.authorLast}
                     key={author.authorID}
                   />  
            )} 
        </tbody>
        </Table>
     
        </Container>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        authors: state.authorReducer,
        books: state.bookReducer,

    }
}

export default connect(mapStateToProps, {getAuthors, getBooks})(AuthorList)