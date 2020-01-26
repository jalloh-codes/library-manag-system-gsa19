const studentsReducer= [];


const studentReducer = (state = studentsReducer, action) =>{
    switch (action.type) {
        case "ADD_STUDENT":
            return[
                ...state,
                action.student
            ]
        case "GET_STUDENTS": 
            return action.students
        case 'REMOVE_STUDENT':
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
};

export default studentReducer;