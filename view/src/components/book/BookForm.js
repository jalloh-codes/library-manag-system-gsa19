import React from 'react';
import { Button, Form,  FormGroup, Label,Input} from 'reactstrap';

export default class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorFirstChange = this.onAuthorFirstChange.bind(this);
        this.onAuthorLastChange = this.onAuthorLastChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onPublishedChange = this.onPublishedChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: props.book ? props.book.title : '',
            authorFirst: props.book ? props.book.authorFirst : '',
            authorLast: props.book ? props.book.authorLast : '',
            descriptio: props.book ? props.book.descriptio : '',
            published: props.book ? props.book.published : '',
            image: props.book ? props.book.image : '',
            error: ''
        };
    }

    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({ title: title }));
    }

    onImageChange(e) {
        const image = e.target.value;
        this.setState(() => ({ image: image }));
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

    onSubmit(e) {
        e.preventDefault();
            this.props.onSubmitBook(
                {
                    title: this.state.title,
                    authorFirst: this.state.authorFirst,
                    authorLast: this.state.authorLast,
                    descriptio: this.state.descriptio,
                    published: this.state.published,
                    image: this.state.image
                }
            );
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} >
            <FormGroup>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                            <Label for="title">Title</Label>
                                <Input type="text" name="title" id="title"
                                palceholder="add title"value={this.state.title} onChange={this.onTitleChange} />

                    <Label for="title">Author Firstname</Label>
                                <Input type="text" name="authorFirst" id="authorFirst"
                                palceholder="add author firstname" value={this.state.authorFirst} onChange={this.onAuthorFirstChange} />
                    
                    <Label for="title">Author Lastname</Label>
                                <Input type="text" name="authorLast" id="authorLast"
                                palceholder="add author lastname" value={this.state.authorLast} onChange={this.onAuthorLastChange} />

                    <Label for="title">Description</Label>
                                <Input type="text" name="description" id="description"
                                palceholder="add description" value={this.state.descriptio} onChange={this.onDescriptionChange} />

                    <Label for="">Published Date</Label>
                                <Input type="text" name="published" id="published"
                                palceholder="add published date" value={this.state.published} onChange={this.onPublishedChange} />

                    <Label for="title">Image File</Label>
                                <Input type="text" name="image" id="image" 
                                value={this.state.image}onChange={this.onImageChange} />
                    <Button color="dark"style={{marginTop: '2rem'}}block>Add Book</Button>
                </FormGroup>
                </Form>
        );
    }
}