import React, { Component } from "react";
import style from "./SignIn.module.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import GreenButton from "../../components/Buttons/Button";
import { Redirect } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    isloggedin: false,
    error: "",
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  };
  handleConfirmPassword = event => {
    if (event.handleConfirmPassword !== event.handlePasswordChange) {
      message.error('error');
    }
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handlesubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.email === "admin" && this.state.password === "abcd") {
      console.log("Authenticated");
      this.setState({ isloggedin: true });
    } else {
      this.setState({ error: "Invalid Credentials" });
    }
  };
  render() {
    if (this.state.isloggedin) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className={style.App}>
        <form className={style.form} onSubmit={this.handlesubmit}>
        <CustomInput
            labelText="Name"
            id="Name"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password1"
            formControlProps={{
              fullWidth: true,
            }}

            handleChange={this.handlePasswordChange }
            type="password"
          />
          <CustomInput
            labelText="Confirm Password"
            id="password2"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleConfirmPassword}
            type="password"
          />

          <GreenButton text="Sign Up" type="submit" />
            
        </form>
        {this.state.error && <div>{this.state.error}</div>}
      </div>
    );
  }
}
