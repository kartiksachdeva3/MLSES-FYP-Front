import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware , compose, combineReducers} from 'redux';
import "bootstrap/dist/css/bootstrap.min.css";
import thunk from 'redux-thunk';
import authReducer from './redux/reducers/authReducer';
import userReducer from './redux/reducers/userDataReducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth : authReducer,
  user: userReducer
})

const store = createStore(
    rootReducer, composeEnchancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById("root"));
