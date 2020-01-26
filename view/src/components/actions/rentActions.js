
import axios from '../axios/axios';
//**************************Student***********************************//
const _addRent =(rent) =>({
    type: 'ADD_RENT',
    rent
})

export const addRent =(bookData = {
    booknum: '',
    rentDay: '',
    dueDay: '',
    studentID: '',
}) =>{
    return(dispatch) =>{
        const rent ={
            rentDay: bookData.rentDay,
            dueDay: bookData.dueDay,
            studentID: bookData.studentID,
            booknum: bookData.booknum
        };
        return axios.post('/rented/create', rent)
                .then(result => {dispatch(_addRent(result.data))})
    }
}


const _removeRent = ({ id } = {}) => ({
    type: 'REMOVE_RENT', 
    id
})

export const removeRent = ({id} = {})=>{
    return (dispatch) =>{
        return axios.delete(`/rented/delete/${id}`).then(() =>{
            dispatch(_removeRent({id}))
        })
    }
};


const _getRents = (rents) => ({
    type: "GET_RENTS",
    rents
})

export const getRents= ()  =>{
    return (dispatch) =>{
        return axios.get(`/rented`).then(result =>{
            const rents = [];
            result.data.forEach(item =>{
                rents.push(item)
            });
            dispatch(_getRents(rents))
        })
    }
};