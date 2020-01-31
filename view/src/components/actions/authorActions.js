
import axios from '../axios/axios';
//**************************Author***********************************//

const _addAuthor =(rent) =>({
    type: 'ADD_AUTHOR',
    rent
})

export const addAuthor =(bookData = {
    authorFirst: '',
    authorLast: '',
    authorID: '',
}) =>{
    return(dispatch) =>{
        const author ={
            authorFirst: bookData.authorFirst,
            authorLast: bookData.authorLast,
            authorID: bookData.authorID,
        };
        return axios.post('/authors/create', author)
                .then(result => {dispatch(_addAuthor(result.data))})
    }
}


const _removeAuthor = ({ id } = {}) => ({
    type: 'REMOVE_RENT', 
    id
})

export const removeAuthor = ({id} = {})=>{
    return (dispatch) =>{
        return axios.delete(`/author/delete/${id}`).then(() =>{
            dispatch(_removeAuthor({id}))
        })
    }
};


const _getAuthors = (authors) => ({
    type: "GET_AUTHORS",
    authors
})

export const getAuthors= ()  =>{
    return (dispatch) =>{
        return axios.get(`/authors`).then(result =>{
            const authors = [];
            result.data.forEach(item =>{
                authors.push(item)
            });
            dispatch(_getAuthors(authors))
        })
    }
};

const _editAuthor = (id, updates) =>({
    type: 'EDIT_AUTHOR',
    id,
    updates
})

export const editAuthor = (id, updates) =>{
    return (dispatch) =>{
        return axios.put(`/author/update/${id}`, updates).then(() =>{
            dispatch(_editAuthor(id, updates))
        })
        
        
    }
}