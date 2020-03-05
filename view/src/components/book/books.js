import  React, {Component} from 'react';
import { connect }  from 'react-redux'
import {getBooks} from '../actions/bookActions';
import { Container} from 'reactstrap';
import {getAuthors} from '../actions/authorActions';
import {getRents}  from '../actions/rentActions';
import SingleBook from './SingleBook'
class Books extends Component{

    componentDidMount(){
        this.props.getBooks();
        this.props.getRents()
        this.props.getAuthors();
    }
    bkID = window.location.pathname.split('/').slice(-1)[0];
    getbooks = () => {
            let arrayBooks = []
            this.props.books.filter((book) =>{
                this.props.authors.filter((author) =>{
                    try{
                        if((parseInt(book.id) === parseInt(this.bkID)) && (parseInt(author.authorID) === parseInt(book.authorID))){
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
                <div className="booklist">  
                        { 
                            this.getbooks().map((book) =>
                                <SingleBook 
                                    id={book.id} title={book.title}
                                    image={book.image} authorFirst={book.authorFirst}
                                    authorLast={book.authorLast} authorID={book.authorID}
                                    published={book.published} descriptio={book.descriptio}
                                    booknum ={book.booknum} key={3}/>
                            )
                        }               
                    </div>
            </Container>
            );
    }
};

const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,
        rents: state.rentReducer,
        authors: state.authorReducer

    }
}

export default connect(mapStateToProps, {getBooks,getRents, getAuthors})(Books)