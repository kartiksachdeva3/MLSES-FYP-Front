import React, { Component } from "react";
import style from "./SignIn.module.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/Buttons/Button";
import { Redirect } from "react-router-dom";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    isloggedin: false,
    error: "",
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
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <Button type="submit" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
        {this.state.error && <div>{this.state.error}</div>}
      </div>
    );
  }
}
