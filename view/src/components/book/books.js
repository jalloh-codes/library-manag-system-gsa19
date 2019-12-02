import React from 'react';
import {Container} from 'reactstrap';
import { connect }  from 'react-redux'
import SingleBook from './SingleBook'
const Books = (props) =>{
    


    let url = window.location.pathname.split('/')
    let getID = url[url.length -1]
    console.log(getID);

    const data = props.book.filter((e) =>{
        if(e.id == getID){
            return e.id
        }
    });
    
    return(
    <Container>
        <li>Books Dome Data</li>
            <hr/>
            {data.map((book) =>
            <SingleBook 
                id={book.id}
                title={book.title}
                image={book.image}
                authorFirst={book.authorFirst}
                authorLast={book.authorLast}
                published={book.published}
                descriptio={book.descriptio}
                booknum ={book.booknum}
            />
            )}
    </Container>
    );

}

const mapStateToProps = (state) =>{
   
    return{
        book: state
    }
}

export default connect(mapStateToProps)(Books);