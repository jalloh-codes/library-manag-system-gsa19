import  React, {Component} from 'react';
import BookCard from  './cards'
import { connect }  from 'react-redux'
import {getBooks} from '../actions/bookActions';
import BookModal from './BookModal';
import { Container, Row, FormGroup,Input,} from 'reactstrap';
import { array } from 'prop-types';


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
        this.props.getBooks()
    }
    handleInput(e){
        this.setState({[e.target.name]: e.target.value}); 
    }
    
    getbooks =  () => {
        return(this.props.books.filter((book)=>
        (book.title.trim().toLowerCase().includes(this.state.searchTitle.trim().toLowerCase())) ? 
         book : null))
    }
    
    render(){
        return(
        
            <Container >
                    <div className="search">
                    {/* <Form className="f-searach"  onSubmit={this.onSubmit}> */}
                        <FormGroup>
                              <Input type="text" name="searchTitle" id="searchTitle"
                                     palceholder="search book by title" 
                                     value={this.state.searchTitle}
                                     onChange={this.handleInput}
                                     />
                        {/* <Button width="3rem" color="dark"style={{marginTop: '2rem'}}
                         >Search</Button>                         */}
                        </FormGroup>                        
                    {/* </Form>  */}
                    
                    </div>  
                
                    <div>
                        <Row> 
                            {
                            this.getbooks().map((e) =>
                                <BookCard 
                                id={e.id}
                                image={e.image}
                                title={e.title}
                                authorFirst={e.authorFirst}
                                authorLast={e.authorLast}
                                authorID={e.authorID}
                                key={e.id}
                                />
                            )
                            }
                            
                        
                        </Row>
                        <div className="addbook" >
                            <BookModal />
                    
                        </div>
                    </div>
            </Container>

            
            );

    }
};


const mapStateToProps = (state) =>{
    return{
        books: state.bookReducer,

    }
}


export default connect(mapStateToProps, {getBooks})(BookList)