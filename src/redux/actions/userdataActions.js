import * as actionTypes from './actionTypes';
import * as actions from '../../redux/actions/index';
import axios from 'axios';





export const userdata = (token) => {
  
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
    }

    return dispatch => {
        

        
        let url = 'http://localhost:3001/api/users'
        axios.get(url)
        .then(response => {
            console.log(response);
            
            
        })
        .catch(err => 
            {
                 console.log(err);
            
        })};
};