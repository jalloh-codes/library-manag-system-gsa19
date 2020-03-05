import React, {useState} from 'react';
import { connect } from 'react-redux';
import {editBook} from '../actions/bookActions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
Form, FormGroup, Label, Input } from 'reactstrap';


const EditBook =(props) => {

    const {
        className
    } = props;

    const initialFormState = {
           id:props.id, title: props.title, descriptio: props.descriptio,
           published: props.published, image: props.image, 
           authorID: props.authorID, booknum: props.booknum
    }
    const[data, setData]=useState(initialFormState)
    const [modal, setModal] = useState(false);

    const handleFormState = e=>{
        const {name, value} = e.target
        setData({...data, [name]: value})
    }
    
    const toggle = () => setModal(!modal);

   const onSubmit = (e) =>{
        e.preventDefault();
        const update =     {
            title: data.title,
            authorID: data.authorID,
            descriptio: data.descriptio,
            published: data.published,
            image: data.image,
            booknum: data.booknum
        }
        console.log(update);
        props.dispatch(editBook(data.id, update));
        toggle()
    }
    return(
        <div>
            <small color="danger" onClick={toggle}>UPDATE</small>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title.</ModalHeader>
            <ModalBody>
            <Form  onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title"
                            palceholder="add title" value={data.title}
                            onChange={handleFormState}/>

                        <Label for="title">Author ID</Label>
                        <Input type="number" name="authorID" id="authorID"
                            palceholder="add author ID" value={data.authorID}
                            onChange={handleFormState}/>
                            
                        <Label for="title">ISBN</Label>
                        <Input type="text" name="isbn" id="isbn"
                            palceholder="add ISBN" value={data.booknum}
                            onChange={handleFormState}/>

                        <Label for="published">Published Date</Label>
                        <Input type="text" name="published" id="published"
                            placeholder="DD-MM-YYYY" value={data.published}
                            onChange={handleFormState}/>

                        <Label for="title">Description</Label>
                        <Input type="textarea" name="descriptio" id="descriptio"
                            palceholder="add author lastname" value={data.descriptio}
                            onChange={handleFormState}/>

                        <Label for="image">Image</Label>
                        <Input type="text" name="image" id="image"
                            palceholder="add image" value={data.image}
                            onChange={handleFormState}/>
<Button color="dark" style={{marginTop: '2rem'}} block>Submit</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        </div>
    );
};

export default connect()(EditBook);