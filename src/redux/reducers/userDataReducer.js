import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const intialState ={
    userdata: null,
    
};


const user_data = (state, action) => {
    return updateObject( state, {
        userdata: "User Added"
    });
};





const userReducer = (state=intialState, action) => {
    switch ( action.type ) {
        case actionTypes.USER_DATA: return user_data(state, action);
       
        default:
            return state;
    }
};

export default userReducer;