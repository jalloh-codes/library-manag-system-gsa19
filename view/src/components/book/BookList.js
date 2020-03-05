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
        }
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

    getbooks = () => {
            let arrayBooks = []
            this.searchbooks().filter((book) =>{
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
                            this.getbooks().map((e) =>
                                <BookCard id={e.id} image={e.image} title={e.title}
                                authorFirst={e.authorFirst} authorLast={e.authorLast}
                                authorID={e.authorID} key={e.id} booknum={e.booknum}
                                descriptio={e.descriptio} published={e.published}/>                                
                            )
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