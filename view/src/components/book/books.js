import React, {Component} from 'react';
import {Container} from 'reactstrap';
import { connect }  from 'react-redux'
import SingleBook from './SingleBook'
import {getBooks}  from '../actions/bookActions';
import {getRents}  from '../actions/rentActions';

class  Books extends Component{

    componentDidMount(){
        this.props.getBooks();
        this.props.getRents()
        
    }

    bkID = window.location.pathname.split('/').slice(-1)[0];



    render(){
    //    let data = this.props.rents.filter((rent) =>{
    //         if(parseInt(rent.id) === 1){
    //             return rent;
                
    //         }
    //     })
      
        
        return(
        <Container>

            <li>Books Dome Data</li>
                <hr/>
                {this.props.books.map((book) =>{
                    return(book.id === parseInt(this.bkID))?
                     <SingleBook 
                        id={book.id}
                        title={book.title}
                        image={book.image}
                        authorFirst={book.authorFirst}
                        authorLast={book.authorLast}
                        authorID={book.authorID}
                        published={book.published}
                        descriptio={book.descriptio}
                        booknum ={book.booknum}
                        key={3}
                    />: null}
                )}
                
                
        </Container>
            );
    }

}

const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,
        rents: state.rentReducer

    }
}


export default connect(mapStateToProps, {getBooks, getRents})(Books)