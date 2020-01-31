import  React, {Component} from 'react';
import BookCard from  './cards'
import { connect }  from 'react-redux'
import {getBooks} from '../actions/bookActions';
import BookModal from './BookModal';
import { Container, FormGroup,Input,} from 'reactstrap';
import {getAuthors} from '../actions/authorActions';


class BookList extends Component{

    constructor(props){
        super(props);
        this.state ={
            searchTitle: '',
            arrayBooks : []
        }
        // this.onSubmit = this.3.bind(this);
        this.handleInput = this.handleInput.bind(this);
        
    }

    componentDidMount(){
        this.props.getBooks();
        this.props.getAuthors();
    }
    handleInput(e){
        this.setState({[e.target.name]: e.target.value}); 
    }
    


    searchbooks =  () => {
        return(this.props.books.filter((book)=>
        (book.title.trim().toLowerCase().includes(this.state.searchTitle.trim().toLowerCase())) ? 
         book : null))
    }

    getBooks = () => {
        return(this.searchbooks())
    }
    
    render(){
        
        return(
            <Container className="main-page">
                <hr/>
                    <div className="search">
                        <FormGroup>
                              <Input type="text" name="searchTitle" id="searchTitle"
                                     palceholder="search book by title" 
                                     value={this.state.searchTitle}
                                     onChange={this.handleInput}
                                     />
                                        
                        </FormGroup>                        
                   
                    
                </div>  
                
                <div className="booklist">
                        <div className="rows"> 
                        {
                            this.searchbooks().map((e) =>
                            this.props.authors.map((a) => {
                             return(parseInt(e.authorID) === parseInt(a.authorID)) ? 
                  
                                <BookCard 
                                id={e.id}
                                image={e.image}
                                title={e.title}
                                authorFirst={a.authorFirst}
                                authorLast={a.authorLast}
                                authorID={e.authorID}
                                key={e.id}
                                /> : null
                            }))
                            }
                        </div>

                    
                            <BookModal />
                    
                    </div>
            </Container>

            
            );

    }
};


const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,
        authors: state.authorReducer

    }
}


export default connect(mapStateToProps, {getBooks, getAuthors})(BookList)