const rentsReducer= [];


const rentReducer = (state = rentsReducer, action) =>{
    switch (action.type) {
        case "ADD_RENT":
            return[
                ...state,
                action.rent
            ]
        case "GET_RENTS": 
            return action.rents
        case 'REMOVE_RENT':
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
};

export default rentReducer;