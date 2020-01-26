import React, {Component} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import {addStudent, getStudents} from '../actions/studentActions';
import history from '../../history';

class AddStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            fname: '',
            lname: '',
            studentID: '',
            address: '',
            apt: '',
            city: '',
            state: '',
            zipcode: '',
            major: '',
            error: '',
            exist: ''
        }
       this.handleInput =  this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentWillMount(){
        this.props.getStudents();
    }
    
    handleInput(e){
        this.setState({[e.target.name]: e.target.value}); 
    }

    studentExist = (studentID) =>{
        let num = this.props.students.length
        this.props.students.filter((student) =>{
            return (parseInt(student.studentID) !== parseInt(studentID))?
                num = num - 1: null
            
          }) 
        return num 
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.fname || !this.state.lname || !this.state.studentID ||
            !this.state.address || !this.state.apt || !this.state.city || 
            !this.state.major || !this.state.state || !this.state.zipcode){
            this.setState(() => ({ error: 'One of the input has no entry!' }));
        }else{
            const info ={
                fname: this.state.fname,
                lname: this.state.lname,
                studentID: this.state.studentID,
                address: this.state.address,
                apt: this.state.apt,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                major: this.state.major

            }
            try{
                return( (parseInt(this.studentExist(info.studentID)) === 1) ?
                    this.setState(() =>({exist: 'Student with the ID number already registed!'}))
                    : this.props.addStudent(info));
            }catch(err){
                console.log({err: err});
                
            }
            console.log(history.goBack())
        }  
        
    }

    render(){
       
        
        return(
            <div>
                   {this.state.exist && <p className="error text-danger">{this.state.exist}</p>}

                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                            <Label for="title">Firstname</Label>
                                <Input type="text" name="fname" id="fnmae"
                                value={this.state.fname }
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Lastname</Label>
                                <Input type="text"name="lname" id="lname" 
                                value={this.state.lname}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Student ID</Label>
                                <Input type="text" name="studentID"id="studentID"
                                value={this.state.studentID}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Major</Label>
                                <Input type="text" name="major"id="major"
                                value={this.state.major}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Address</Label>
                                <Input type="text" name="address"id="address"
                                value={this.state.address}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Apt</Label>
                                <Input type="text" name="apt" id="apt"
                                value={this.state.apt}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">City</Label>
                                <Input type="text" name="city" id="city"
                                value={this.state.city}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">State</Label>
                                <Input type="text" name="state" id="state"
                                value={this.state.state}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Zipe Code</Label>
                                <Input type="text" name="zipcode" id="zipcode"
                                value={this.state.zipcode}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                            <Button
                                color="dark"style={{marginBottom: '8rem'}}block
                            >Submit</Button>
                            </FormGroup>
                            
                        </Form>
            </div>
        );
    }


}


const mapStateToProps = state =>{
    return {
        students: state.studentReducer
    }
}

export default connect(mapStateToProps, {getStudents, addStudent})(AddStudent)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   