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
    localStorage.removeItem('Jwt_token');
    localStorage.removeItem('expirationDate');
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
            const expirationDate = new Date(new Date().getTime() + response.data.expireIn * 1000)
            localStorage.setItem('Jwt_token', response.data.token);
            localStorage.setItem('expirationDate', expirationDate);
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
            const expirationDate = new Date(new Date().getTime() + response.data.expireIn * 1000)
            localStorage.setItem('Jwt_token', response.data.token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(response.data.token, response.data.email, response.data._id));
            dispatch(checkAuthTimeout(parseInt(response.data.expireIn)));
            
        })
        .catch(err => 
            {
               dispatch(authFail(err));
            })
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('Jwt_token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};