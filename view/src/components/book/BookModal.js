import React, {Component} from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import { connect } from 'react-redux';
import {addBook} from '../actions/bookActions';




const fileTypes = 'image/x-png, image/png,image/jpg, image/jpeg, image/gif';

class  BookModal  extends Component {

    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorFirstChange = this.onAuthorFirstChange.bind(this);
        this.onAuthorLastChange = this.onAuthorLastChange.bind(this);
        this.onAuthorIDChange = this.onAuthorIDChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onPublishedChange = this.onPublishedChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onIsbnChange = this.onIsbnChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            modal: false,
            title:  '',
            authorFirst:'',
            authorLast: '',
            authorID: '',
            descriptio: '',
            published:  '',
            booknum: '',
            image: '',
            error: ''
        };
    }
    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }



    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({ title: title }));
    }
    onIsbnChange(e) {
        const booknum = e.target.value;
        this.setState(() => ({ booknum: booknum }));
    }

    onImageChange(e) {
         const image = e.target.value
        this.setState( () =>({image: image}));      
        
    }


    onAuthorIDChange(e) {
        const authorID = e.target.value;
        this.setState(() => ({ authorID: authorID }));
    }

    onAuthorFirstChange(e) {
        const authorFirst = e.target.value;
        this.setState(() => ({ authorFirst: authorFirst }));
    }

    onAuthorLastChange(e) {
        const authorLast = e.target.value;
        this.setState(() => ({ authorLast: authorLast }));
    }

    onDescriptionChange(e) {
        const descriptio = e.target.value;
        this.setState(() => ({ descriptio: descriptio }));
    }

    onPublishedChange(e) {
        const published = e.target.value;
        this.setState(() => ({ published: published }));
    }

    onSubmit =(e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.authorFirst || !this.state.authorLast || !this.state.booknum
            || !this.state.image || !this.state.authorID) {
            this.setState(() => ({ error: 'Please set title & author & published!' }));
        } else {
            this.setState(() => ({ error: '' }));          
            const newBook =     {
                    title: this.state.title,
                    authorFirst: this.state.authorFirst,
                    authorLast: this.state.authorLast,
                    authorID: this.state.authorID,
                    descriptio: this.state.descriptio,
                    published: this.state.published,
                    image: this.state.image,
                    booknum: this.state.booknum
                }
                try{
                    console.log(newBook);
                    this.props.addBook(newBook);
                }catch(err){
                    console.log(err);
                    
                }
            
           
        }
        this.toggle();

        //reset state field to empty 
        this.setState({
            title: '',
            authorFirst: '',
            authorLast: '',
            authorID: '',
            descriptio: '',
            booknum: '',
            published: '',
            image: ''

        })
        
        
    }
    render(){
        return(

    
            <div>
                <Button
                color="dark"
                stye={{marginTop: '2rem'}}
                onClick={this.toggle}
                >Add Book</Button>
                <Modal
                isOpen ={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add Book TO DB </ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit} >
            <FormGroup>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                
                            <Label for="title">Title</Label>
                                <Input type="text"
                                name="title"
                                id="title"
                                palceholder="add title"
                                value={this.state.title}
                                onChange={this.onTitleChange} />

                    <Label for="title">Author Firstname</Label>
                                <Input type="text"
                                name="authorFirst"
                                id="authorFirst"
                                palceholder="add author firstname"
                                value={this.state.authorFirst}
                                onChange={this.onAuthorFirstChange} />
                    
                    <Label for="title">Author Lastname</Label>
                                <Input type="text"
                                name="authorLast"
                                id="authorLast"
                                palceholder="add author lastname"
                                value={this.state.authorLast}
                                onChange={this.onAuthorLastChange} />

                    <Label for="title">Author ID</Label>
                                <Input type="text"
                                name="authorID"
                                id="authorID"
                                palceholder="add author ID"
                                value={this.state.authorID}
                                onChange={this.onAuthorIDChange} />


                    <Label for="title">Description</Label>
                                <Input type="text"
                                name="descriptions"
                                id="descriptions"
                                palceholder="add description"
                                value={this.state.descriptio}
                                onChange={this.onDescriptionChange} />


                    <Label for="title">ISBN</Label>
                                <Input type="text"
                                name="booknum"
                                id="booknum"
                                palceholder="add Isbn"
                                value={this.state.booknum}
                                onChange={this.onIsbnChange} />


                    <Label for="published">Published Date</Label>
                                <Input type="text"
                                name="published"
                                id="published"
                                palceholder="add published date"
                                value={this.state.published}
                                onChange={this.onPublishedChange} />

                    <Label for="image">Image</Label>
                                <Input type="text"
                                name="image"
                                id="image"
                                palceholder="add image"
                                value={this.state.image}
                                onChange={this.onImageChange}
                                accept={fileTypes} 
                                multiple={false}/>
                    <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >Add Book</Button>
               
                </FormGroup>
                </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    book: state.book
})

export default connect(mapStateToProps, {addBook})(BookModal)