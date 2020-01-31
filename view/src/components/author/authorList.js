import  React, {Component} from 'react';
import AuthorCard from  './cards';
import {Container} from 'reactstrap'
import { connect }  from 'react-redux'
import {getAuthors} from '../actions/authorActions';

class  AuthorList extends Component{

    componentDidMount(){
        this.props.getAuthors()
    }
    render(){   
    return(
        <Container>
        <div>
            {this.props.authors.map((author) =>
                  <AuthorCard 
                    id={author.id}
                        authorID={author.authorID}
                     authorFirst={author.authorFirst}
                    authorLast={author.authorLast}
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
        authors: state.authorReducer,

    }
}


export default connect(mapStateToProps, {getAuthors})(AuthorList)