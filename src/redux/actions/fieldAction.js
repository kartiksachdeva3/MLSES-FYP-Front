import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fieldStart =() => {
    return {
        type: actionTypes.FIELD_START
    };
};

export const fieldSuccess = (field) => {
    return{
        type: actionTypes.FIELD_SUCCESS,
        FieldData: field
        
        
         
    };
};

export const fieldFail = (error) => {
    return {
        type: actionTypes.FIELD_FAIL,
        error: error
    };
};

export const field = (token) => {
    return dispatch => {
        dispatch(fieldStart());

        axios.defaults.headers = 
                {
                'Content-Type': 'application/json',
                 Authorization: 'bearer ' + token
                } 

        axios.get('http://localhost:3001/api/fields/1')
            .then( result => {
                const fetchfield = [] ;
                for (let key in result.data){
                    fetchfield.push({
                        ...result.data[key],
                        id: key
                    });
                }
                console.log(fetchfield)
                dispatch(fieldSuccess(fetchfield))
            })
            .catch((err)=>{
              console.log(err)
              dispatch(fieldFail(err))
            });
          
    };
};

