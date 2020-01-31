const authorsReducer= [];


 const authorReducer =(state = authorsReducer, action) =>{
    switch (action.type) {
        case 'ADD_AUTHOR':
            return[
                ...state,
                action.author
            ];
        case 'REMOVE_RENT':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_AUTHOR':
            return state.map((author) =>{
                if(author.id === author.id){
                    return{
                        ...author,
                        ...action.updates
                    };
                }else{
                    return author
                }
            });
        case 'GET_AUTHORS':
            return action.authors
        default:
            return state;
    }
};

export default authorReducer;