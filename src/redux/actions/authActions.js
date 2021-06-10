import * as actionTypes from './actionTypes';

import axios from 'axios';

export const authStart =() => {
    return {
        type:  actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: idToken
        
         
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};


export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 10000);
    };
};

export const auth = (email, password ) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email : email,
            password : password
        };

      
        let url = 'http://localhost:3001/login'
        axios.post(url, authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.token));
            dispatch(checkAuthTimeout(parseInt(response.data.expireIn)));
            
        })
        .catch(err => 
            {
               dispatch(authFail(err));
            })
    };
};

