import React, {Component} from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import {addBook} from '../actions/bookActions';
const fileTypes = 'image/x-png, image/png,image/jpg, image/jpeg, image/gif';

class  AddBook  extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)

        this.state = {
            title:  '', authorID: '', descriptio: '',
            published:  '', booknum: '', image: '',
            error: ''
        };
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value}); 
    }
    
    onSubmit =(e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.descriptio || !this.state.published || !this.state.booknum
            || !this.state.image || !this.state.authorID) {
            this.setState(() => ({ error: 'Please set title & author & published!' }));
        } else {
            this.setState(() => ({ error: '' }));          
            const newBook =     {
                    title: this.state.title,
                    authorID: this.state.authorID,
                    descriptio: this.state.descriptio,
                    published: this.state.published,
                    image: this.state.image,
                    booknum: this.state.booknum
                }
                try{
                    this.props.addBook(newBook);
                   
                }catch(err){
                    console.log(err);
                    
                }  
        }     
    }
    render(){
        return(
            <div >           
                <Form onSubmit={this.onSubmit} >
                    <FormGroup>
                        {this.state.error && <p className='error'>{this.state.error}</p>}              
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title"
                            palceholder="add title" value={this.state.title}
                            onChange={this.handleInput} />
                        <Label for="title">Description</Label>
                        <Input type="text" name="descriptio" id="descriptio"
                            palceholder="add author lastname" value={this.state.descriptio}
                            onChange={this.handleInput} />
                        <Label for="title">ISBN</Label>
                        <Input type="text" name="booknum" id="booknum"
                            alceholder="add Isbn" value={this.state.booknum}
                            onChange={this.handleInput} />
                        <Label for="published">Published Date</Label>
                        <Input type="text" name="published" id="published"
                            palceholder="add published date" value={this.state.published}
                            onChange={this.handleInput} />
                        <Label for="image">Image</Label>
                        <Input type="text" name="image" id="image"
                            palceholder="add image" value={this.state.image}
                            onChange={this.handleInput} accept={fileTypes} 
                            multiple={false}/>                
                <Button color="dark" style={{marginTop: '2rem'}} block>Add Book</Button>              
                </FormGroup>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    authors: state.authorReducer,
})

export default connect(mapStateToProps, {addBook})(AddBook)