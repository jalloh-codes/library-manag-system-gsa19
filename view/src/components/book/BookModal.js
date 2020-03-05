import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label,Input} from 'reactstrap';
import { connect } from 'react-redux';
import {addBook, getBooks} from '../actions/bookActions';
import {addAuthor, getAuthors} from '../actions/authorActions';

const fileTypes = 'image/x-png, image/png,image/jpg, image/jpeg, image/gif';

class  BookModal  extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)

        this.state = {
            modal: false, title:  '', authorFirst:'',
            authorLast: '', authorID: '', descriptio: '',
            published:  '', booknum: '', image: '',
            error: '', authorExist: '', bookExist: ''
        };
    }
    componentDidMount(){
        this.props.getBooks();
        this.props.getAuthors();
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value}); 
    }

    authorExist= () =>{
        let authorID = []
        this.props.authors.forEach(e => {
            authorID.push(e.authorID);
        });
        return authorID;
    }
    bookExist= () =>{
        let bookID = []
        this.props.books.forEach(e => {
            bookID.push(e.booknum);
        });
        return bookID;
    }
    onSubmit =(e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.authorFirst || !this.state.authorLast || !this.state.booknum
            || !this.state.image || !this.state.authorID) {
            this.setState(() => ({ error: 'Please set title & author & published!' }));
        }if(this.authorExist().includes(this.state.authorID)){
            this.setState(() => ({authorExist: 'Auhthor already Existed'}));
        }if(this.bookExist().includes(this.state.booknum)){
            this.setState(() =>({bookExist: 'Book ISBN already existed'}))
        }else {
            this.setState(() => ({ error: '' }));          
            const newBook =     {
                    title: this.state.title,
                    authorID: this.state.authorID,
                    descriptio: this.state.descriptio,
                    published: this.state.published,
                    image: this.state.image,
                    booknum: this.state.booknum
                }
            const newAuthor ={
                authorFirst: this.state.authorFirst,
                authorLast: this.state.authorLast,
                authorID: this.state.authorID,
            }
                try{
                    this.props.addAuthor(newAuthor);
                    this.props.addBook(newBook);
                    this.toggle()
                }catch(err){
                    console.log(err);
                    
                }  
        }
        window.location.reload()

    }
    render(){
        return(
            <div className="float-right" >
                <Button color="dark" onClick={this.toggle} 
                className='btn addBook '>&oplus;</Button>
                <Modal isOpen ={this.state.modal}toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        New Book</ModalHeader>
                    <ModalBody>
                <Form onSubmit={this.onSubmit} >
                    <FormGroup>
                        {this.state.error && <p className='error'>{this.state.error}</p>}
                               
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title"
                            palceholder="add title" value={this.state.title}
                            onChange={this.handleInput} />

                        <Label for="title">Author Firstname</Label>
                        <Input type="text" name="authorFirst"
                            id="authorFirst" palceholder="add author firstname"
                            alue={this.state.authorFirst} onChange={this.handleInput} />
                    
                        <Label for="title">Author Lastname</Label>
                        <Input type="text" name="authorLast"
                            id="authorLast" palceholder="add author lastname"
                            value={this.state.authorLast} onChange={this.handleInput} />
                        {this.state.authorExist && <p className='error'>{this.state.authorExist}</p>}
                        <Label for="title">Author ID</Label>
                        <Input type="number" name="authorID" id="authorID"
                            palceholder="add author ID" value={this.state.authorID}
                            onChange={this.handleInput} />
                        
                        {this.state.bookExist && <p className='error'>{this.state.bookExist}</p>}
                        <Label for="title">ISBN</Label>
                        <Input type="text" name="booknum" id="booknum"
                            alceholder="add Isbn" value={this.state.booknum}
                            onChange={this.handleInput} />

                        <Label for="published">Published Date</Label>
                        <Input type="text" name="published" id="published"
                            palceholder="add published date" value={this.state.published}
                            onChange={this.handleInput} />

                        <Label for="title">Description</Label>
                        <Input type="textarea" name="descriptio" id="descriptio"
                            palceholder="add author lastname" value={this.state.descriptio}
                            onChange={this.handleInput} />
                        
                        <Label for="image">Image</Label>
                        <Input type="text" name="image" id="image"
                            palceholder="add image" value={this.state.image}
                            onChange={this.handleInput} accept={fileTypes} 
                            multiple={false}/>

                <Button color="dark" style={{marginTop: '2rem'}} block>Add Book</Button>
                </FormGroup>
                </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    books: state.bookReducer,
    authors: state.authorReducer
})

export default connect(mapStateToProps, {addBook, addAuthor, getBooks, getAuthors})(BookModal)