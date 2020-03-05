import React, {useState, setState} from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody,
Form, FormGroup, Label, Input } from 'reactstrap';
import {removeRent, getRents} from '../actions/rentActions';
import {getStudents} from '../actions/studentActions';
import {bindActionCreators} from 'redux'
const Return = (props, {removeRent}) =>{

    const initialFormState = {
        id:props.id, studentID: '', booknum: props.booknum,
        rented: '', exist: ''
    }
    const[data, setData]=useState(initialFormState)
    const [modal, setModal] = useState(false);

    const handleFormState = e=>{
        const {name, value} = e.target
        setData({...data, [name]: value})
    }
    
    const toggle = () => setModal(!modal);

    const studentRented = (studentID, booknum) =>{
        let id = []
        let num = props.getRented.length
        props.getRented.filter((key) =>{
            return ((parseInt(key.studentID) === parseInt(studentID)) && (key.booknum == booknum))?
               id.push(key.id) :  num = num -1
          }) 
        return id 
    }
    
    const studentExist = (studentID)=>{
        let num = props.students.length
        props.students.filter((student) =>{
            return (parseInt(student.studentID) === parseInt(studentID))?
               null  : num = num - 1
          }) 
        return num 
    }

    const onSubmit=(e, dispatch)=>{
        e.preventDefault();
        if(!data.booknum || !data.studentID){
            setState(() => ({ error: 'One of the field is empty' }));
        }else{
            const info ={
                studentID: data.studentID,
                booknum: data.booknum
            }
            try{
                if(parseInt(studentExist(info.studentID)) === 0){
                    setState(() =>({exist: `This student does not exist`}));
                }
                if(studentRented(info.studentID, info.booknum).length === 1 ){
                let id = studentRented(data.studentID, data.booknum)[0]   
                //props.dispatch(removeRent({id}))
                    dispatch(removeRent({id}))
                }else{
                    setState(() =>({rented: `This student did not checkout this book`}))
                }
            }catch(err){
                console.log({err: err});
            }                         
        }    
    }  
   
    return(
        <div>
            <small color="danger" onClick={toggle}>RETURN</small>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title.</ModalHeader>
            <ModalBody>
            <Form onSubmit={onSubmit}>              
                <FormGroup>
                {data.rented && <p className='error text-danger'>Rented:{data.rented}</p>}   
                {data.exist && <p className='error text-danger'>Exist:{data.exist}</p>}
                    <Label for="title">Student ID</Label>
                    <Input type="number"name="studentID"id="b" value={data.studentID} onChange={handleFormState} />
                </FormGroup>
                <FormGroup>
                    <Label for="title">ISBN</Label>
                    <Input type="text" name="isbn" id="isbn"palceholder="add ISBN" value={data.booknum}
                   onChange={handleFormState}/>
                </FormGroup>
                <FormGroup>
                    <Button color="dark" style={{marginTop: '2rem'}} block>Submit</Button>
                </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        </div>
    );
 
};

const mapStateToProps = (state) =>{
    return{
        getRented: state.rentReducer,
        students: state.studentReducer
    }
}

export default connect(mapStateToProps, {getRents, getStudents})(Return);