const myReducer = (state, action) => {
    switch (action.type) {
        case 'Delete_Data':
            return '';
        case 'STORE_DATA':
            return { ...state, myData: action.data };
        case 'Add_data':
            return '';
        default:
            return state;
    }
}

export default myReducer;