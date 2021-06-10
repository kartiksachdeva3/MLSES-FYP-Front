import * as actionTypes from './actionTypes';
import axios from 'axios';

export const senStart =() => {
    return {
        type: actionTypes.SENSOR_START
    };
};

export const senSuccess = (sensor) => {
    return{
        type: actionTypes.SENSOR_SUCCESS,
        SensorData: sensor
        
        
         
    };
};

export const senFail = (error) => {
    return {
        type: actionTypes.SENSOR_FAIL,
        error: error
    };
};

export const sen = (token) => {
    return dispatch => {
        dispatch(senStart());

        axios.defaults.headers = 
                {
                'Content-Type': 'application/json',
                 Authorization: 'bearer ' + token
                } 

        axios.get('http://localhost:3001/api/fields/0')
            .then( result => {
                const fetchSensor = [] ;
                for (let key in result.data){
                    fetchSensor.push({
                        ...result.data[key],
                        id: key
                    });
                }
                console.log(fetchSensor)
                dispatch(senSuccess(fetchSensor))
            })
            .catch((err)=>{
              console.log(err)
              dispatch(senFail(err))
            });
          
    };
};

