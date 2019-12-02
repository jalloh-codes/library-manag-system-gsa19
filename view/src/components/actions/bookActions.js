import axios from '../axios/axios';


const _addBook =(book) =>({
    type: 'ADD_BOOK',
    book
})

export const addBook =(bookData = {
    title: '',
    descriptio: '',
    authorFirst: '',
    authorLast: '',
    authorID: '',
    image: '',
    published: '',
    booknum: '',
}) =>{
    return(dispatch) =>{
        const book ={
            title: bookData.title,
            descriptio: bookData.descriptio,
            authorFirst: bookData.authorFirst,
            authorLast: bookData.authorLast,
            authorID: bookData.authorID,
            published: bookData.published,
            image: bookData.image,
            booknum: bookData.booknum
        };
        return axios.post('/books/create', book).then(result =>{
            dispatch(_addBook(result.data))
        })
    }
}

const _removeBook = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
})

export const removeBook = ({id} = {})=>{
    return (dispatch) =>{
        return axios.delete(`/books/delete/${id}`).then(() =>{
            dispatch(_removeBook({id}))
        })
    }
};


const _editBook = (id, updates) =>({
    type: 'EDIT_BOOK',
    id,
    updates
})

export const editBook = (id, updates) =>{
    return (dispatch) =>{
        return axios.put(`/books/update/${id}`, updates).then(() =>{
            dispatch(_editBook(id, updates))
        })
        
        
    }
}

const _getBooks = (books) => ({
    type: "GET_BOOKS",
    books
})

export const getBooks= () =>{
    return (dispatch) =>{
        return axios.get(`/books`).then(result =>{
            const books = [];

            result.data.forEach(item => {
                books.push(item)
            });

            dispatch(_getBooks(books))
           
        })
    }
    
    
}

const _getBookId = (bookI) => ({
    type: "GET_BOOKID",
    bookI
})

export const getBookId= (id) =>{
    return (dispatch) =>{
        return axios.get(`/books/${id}`).then(result =>{
            const  bookI = [];

            bookI.push(result.data)
            dispatch(_getBookId(bookI))

        })
    }
}

