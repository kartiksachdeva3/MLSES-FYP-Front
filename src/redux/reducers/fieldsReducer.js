import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const intialState ={
    field: [],
    loading: false
};

const fieldStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fieldSuccess = (state, action) => {
    return updateObject( state, { 
        field: action.FieldData,
        loading: false
     } );
};

const fieldFail = (state, action) => {
    return updateObject( state, {
        loading: false
    });
};




const fieldsReducer = (state=intialState, action) => {
    switch ( action.type ) {
        case actionTypes.FIELD_START: return fieldStart(state, action);
        case actionTypes.FIELD_SUCCESS: return fieldSuccess(state, action);
        case actionTypes.FIELD_FAIL: return fieldFail(state, action);
        default:
            return state;
    }
};

export default fieldsReducer;