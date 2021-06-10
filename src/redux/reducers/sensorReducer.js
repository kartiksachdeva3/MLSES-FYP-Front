import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const intialState ={
    sensor: [],
    loading: false
};

const senStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const senSuccess = (state, action) => {
    return updateObject( state, { 
        sensor: action.SensorData,
        loading: false
     } );
};

const senFail = (state, action) => {
    return updateObject( state, {
        loading: false
    });
};




const sensorReducer = (state=intialState, action) => {
    switch ( action.type ) {
        case actionTypes.SENSOR_START: return senStart(state, action);
        case actionTypes.SENSOR_SUCCESS: return senSuccess(state, action);
        case actionTypes.SENSOR_FAIL: return senFail(state, action);
        default:
            return state;
    }
};

export default sensorReducer;