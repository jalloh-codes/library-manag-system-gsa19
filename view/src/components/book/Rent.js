import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody,Form, FormGroup,Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import {addRent, getRents} from '../actions/rentActions';
import {getStudents} from '../actions/studentActions';
import {Link} from 'react-router-dom';

class Rent extends Component{
    constructor(props){
        super(props);
        this.state={
            modal: false, booknum: this.props.booknum, rentDay: '',
            dueDay: '',studentID: '', error: '',
            verify: '', exist: ''
        }
        this.handleInput =  this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentWillMount(){
        this.props.getRents();
        this.props.getStudents();
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value}); 
    }

    verify = (booknum, studentID) =>{
        let num =0
        this.props.getRented.filter((rent) =>{
          return (rent.booknum == (booknum) && parseInt(rent.studentID) === parseInt(studentID)) ?
            num = num +1  : null
        }) 
        return num 
    }

    studentExist = (studentID) =>{
        let num = this.props.students.length
        this.props.students.filter((student) =>{
            return (parseInt(student.studentID) !== parseInt(studentID))?
                num = num - 1 : null
          }) 
        return num 
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.dueDay || !this.state.rentDay || !this.state.studentID){
            this.setState(() => ({ error: 'One of the input has no entry!' }));
        }else{
            const info ={
                dueDay: this.state.dueDay,
                rentDay: this.state.rentDay,
                studentID: this.state.studentID,
                booknum: this.props.booknum
            }
            try{
                return ( (parseInt(this.verify(info.booknum, info.studentID))  === 1) ?
                    this.setState(() =>({verify: `Student already checkout this book`})) :
                (parseInt(this.studentExist(info.studentID)) === 1) ? 
                this.props.addRent(info):
                    this.setState(() =>({exist: `Student does not exist, Sign In.`})))
                    //this.toggle()                  
            }catch(err){
                console.log({err: err});
            }                                 
        }  
        window.location.reload() 

    }  

    render(){         
        let path= window.location.pathname;
        
        return(
            <div>
               <small size="sm"
                onClick={this.toggle}
                >CHECKOUT</small>
                <Modal isOpen ={this.state.modal}  toggle={this.toggle} >

                    <ModalHeader toggle={this.toggle}>Student Information</ModalHeader>
                    <ModalBody>
                    {this.state.error && <p className='error text-danger' >{this.state.error}</p>}
                    {this.state.verify && <p className="error text-danger">{this.state.verify}</p>}
                    {this.state.exist && <Link 
                    to={{pathname:`/sign`, data:{path}}}
                        className="error warning">{this.state.exist}</Link>}
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                            <Label for="title">Todays Date</Label>
                                <Input type="date"
                                name="rentDay"
                                id="rentDay"
                                value={this.state.rentDay }
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Due Date</Label>
                                <Input type="date"
                                name="dueDay"
                                id="dueDay"
                                
                                value={this.state.dueDay}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Student ID</Label>
                                <Input type="number"
                                name="studentID"
                                id="b"
                                value={this.state.studentID}
                                onChange={this.handleInput} />
                            </FormGroup>
                            <FormGroup>
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >Submit</Button>
                            </FormGroup>
                            
                        </Form>
                    </ModalBody>

                </Modal>
            
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        getRented: state.rentReducer,
        addRent: state.rentReducer,
        students: state.studentReducer
    }
}

export default connect(mapStateToProps, {addRent, getRents, getStudents})(Rent)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   