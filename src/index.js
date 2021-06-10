<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App/>, document.getElementById('root')
);


=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware , compose, combineReducers} from 'redux';
import "bootstrap/dist/css/bootstrap.min.css";
import thunk from 'redux-thunk';
import authReducer from './redux/reducers/authReducer';
import userReducer from './redux/reducers/userDataReducer';
import sensorReducer from './redux/reducers/sensorReducer';
import fieldsReducer from "./redux/reducers/fieldsReducer";

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth : authReducer,
  user: userReducer,
  sense: sensorReducer,
  fil: fieldsReducer
})

const store = createStore(
    rootReducer, composeEnchancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById("root"));
>>>>>>> Stashed changes
