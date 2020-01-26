import axios from '../axios/axios';
//**************************Rented***********************************//
const _addStudent =(student) =>({
    type: 'ADD_STUDENT',
    student
})

export const addStudent =(bookData = {
    fname: '',
    lname: '',
    studentID: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zipcode: '',
    major: ''
}) =>{
    return(dispatch) =>{
        const rent ={
            fname: bookData.fname,
            lname: bookData.lname,
            studentID: bookData.studentID,
            address: bookData.address,
            apt: bookData.apt,
            city: bookData.city,
            state: bookData.state,
            zipcode: bookData.zipcode,
            major: bookData.major
        };
        return axios.post('/students/create', rent)
                .then(result => {dispatch(_addStudent(result.data))})
    }
}



const _removeStudent = ({ id } = {}) => ({
    type: 'REMOVE_STUDENT',
    id
})

export const removeStudent = ({id} = {})=>{
    return (dispatch) =>{
        return axios.delete(`/students/delete/${id}`).then(() =>{
            dispatch(_removeStudent({id}))
        })
    }
};


const _getStudents = (students) => ({
    type: "GET_STUDENTS",
    students
})

export const getStudents= ()  =>{
    return (dispatch) =>{
        return axios.get(`/students`).then(result =>{
            const students = [];
            result.data.forEach(item =>{
                students.push(item)
            });
            dispatch(_getStudents(students))
        })
    }
};