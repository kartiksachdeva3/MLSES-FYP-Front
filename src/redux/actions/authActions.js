import * as actionTypes from './actionTypes';

import axios from 'axios';

export const authStart =() => {
    return {
        type:  actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, email, uid) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: idToken,
        _id: uid,
        email: email
        
         
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

export const checkSignup = (Email, Password) => {
    return dispatch => {
        dispatch(auth(Email,Password))
    };
};


export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 10000);
    };
};

export const signup = (name,email,password, phone ) => {
    return dispatch => {
        dispatch(authStart());
        const signData = {
            name: name,
            email : email,
            password : password,
            contactnumber: phone
        };

      
        let url = 'http://localhost:3001/signup'
        axios.post(url, signData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.token, response.data.email, response.data._id));
            dispatch(checkAuthTimeout(parseInt(response.data.expireIn)));
            
            
        })
        .catch(err => 
            {
               dispatch(authFail(err));
            })
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
            dispatch(authSuccess(response.data.token, response.data.email, response.data._id));
            dispatch(checkAuthTimeout(parseInt(response.data.expireIn)));
            
        })
        .catch(err => 
            {
               dispatch(authFail(err));
            })
    };
};

