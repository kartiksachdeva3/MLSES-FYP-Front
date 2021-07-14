import * as actionTypes from './actionTypes';
import axios from 'axios';

export const senforms =(sensorData) => {
    return {
        type: actionTypes.SENSOR_ADDED,
        sensorData: sensorData
    };
};

export const senfail =() => {
    return{
        type: actionTypes.SENSOR_NOTADDED
    }
}

export const sensorform = (sid, name, relativeLocation , fid) => {
    return dispatch => {
        const sensorData = {
           sid: sid,
           name: name,
           relativeLocation: relativeLocation,
           fid: fid
        };

        //console.log(sensorData);

        axios.defaults.headers = 
         {
        'Content-Type': 'application/json',
         Authorization: 'bearer ' + localStorage.getItem('Jwt_token')
        } 
        let url = 'http://localhost:3001/api/user/fields/sensor/save'
        axios.post(url, sensorData)
        .then(response => {
            console.log(response);
            dispatch(senforms(sensorData));
        })
        .catch(err => 
            {
               dispatch(senfail(err));
            })
    };
}
