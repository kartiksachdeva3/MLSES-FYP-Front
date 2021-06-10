import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const intialState ={
    idToken: null,
    uid:  null,
    email: null,
    loading: false,
    error: null
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null , loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        idToken: action.token,
        uid:action._id,
        email:action.email,
        loading: false,
        error: null
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
    });
};

const authLogout = (state, action) => {
    return updateObject(state, intialState);
};



const authReducer = (state=intialState, action) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
};

export default authReducer;