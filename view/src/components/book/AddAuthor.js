import React, {Component} from 'react';
import {
    Button,Form, FormGroup, Label, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import {addAuthor, getAuthors} from '../actions/authorActions';

class  AddAuthor  extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)

        this.state = {
            authorFirst:'', authorLast: '', authorID: '', error: ''
        };
    }
    componentDidMount(){
        this.props.getAuthors()
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value}); 
    }
    
    checkExist= () =>{
        let num= []
        this.props.authors.filter((author)=>{
                let id=  author.authorID;
                num.push(id)
        })
        return num;
    }
    onSubmit =(e) => {
        e.preventDefault();

        if (!this.state.authorFirst || !this.state.authorLast || !this.state.authorID) {
            this.setState(() => ({ error: 'Please set title & author & published!' }));
        } else {
            this.setState(() => ({ error: '' }));          
            const newAuthor = {
                authorFirst: this.state.authorFirst,
                authorLast: this.state.authorLast,
                authorID: this.state.authorID
            }
                try{
                    this.props.addAuthor(newAuthor);
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
                        <Label for="title">Author Firstname</Label>
                        <Input type="text" name="authorFirst"
                            id="authorFirst" 
                            palceholder="add author firstname"
                            value={this.state.authorFirst} 
                            onChange={this.handleInput} />                   
                        <Label for="title">Author Lastname</Label>
                        <Input type="text" name="authorLast"
                            id="authorLast" palceholder="add author lastname"
                            value={this.state.authorLast} 
                            onChange={this.handleInput} />
                        <Label for="title">Author ID</Label>
                        <Input type="number" name="authorID" 
                            id="authorID" palceholder="add author ID" 
                            value={this.state.authorID}
                            onChange={this.handleInput} />
                
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

export default connect(mapStateToProps, {addAuthor, getAuthors})(AddAuthor)