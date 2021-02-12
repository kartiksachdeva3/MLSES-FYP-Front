import React, { Component } from "react";
import "./SignIn.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/Buttons/Button";
import {Redirect} from 'react-router-dom'

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    isloggedin: false
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handlesubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    if(this.state.email === 'admin' && this.state.password==='abcd'){
        console.log("Authenticated")
    this.setState({isloggedin : true})
    this.props.history.push('/dashboard')
    
}
  }
  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handlesubmit}>
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <Button type="submit" color="primary" className="form__custom-button" onClick={this.handlesubmit}>
            Log in
          </Button>
        </form>
      </div>
    );
  }
}
