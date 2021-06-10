import React, { Component } from "react";
import style from './SignUp.module.css';
import Input from "../../components/CustomInput/Input";
import GreenButton from "../../components/Buttons/Button";
import { Redirect } from "react-router-dom";
import * as actions from '../../redux/actions/index';
import {connect} from "react-redux";
import Navbar from "../../components/Navbar/Navbar";


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.idToken !== null

    };
 };

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (name, email, password, phone) => dispatch(actions.signup(name, email, password, phone )),
     };
  }

class SignUp extends Component {
  state = {
      user:{
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
          },
        email: {
          elementType: 'input',
          elementConfig: {
              type: 'email',
              placeholder: 'Enter Email'
          },
          value: '',
          validation: {
              required: true,
              isEmail: true
          },
          valid: false,
          touched: false
      },
      password: {
          elementType: 'input',
          elementConfig: {
              type: 'password',
              placeholder: 'Enter Password'
          },
          value: '',
          validation: {
              required: true,
              minLength: 6
          },
          valid: false,
          touched: false
        },
        phone: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Mobile Number'
            },
            value: '',
            validation: {
                required: true,
                minLength: 10,
                maxLength: 10,
                isNumeric: true
            },
            valid: false,
            touched: false
          }
      }
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}

inputChangedHandler = (event, userName) => {
    const updateduser = {
        ...this.state.user,
        [userName]: {
            ...this.state.user[userName],
            value: event.target.value,
            valid: this.checkValidity(event.target.value, this.state.user[userName].validation),
            touched: true
        }
    };
    this.setState({user: updateduser});
}

 submitHandler = (event) => {
      event.preventDefault();
      this.props.onAuth(this.state.user.name.value,this.state.user.email.value, this.state.user.password.value , this.state.user.phone.value);
  }



 
  render() {
    const formElementsArray = [];
    for ( let key in this.state.user ) {
        formElementsArray.push( {
            id: key,
            config: this.state.user[key]
        } );
    }
    
    let form = formElementsArray.map( formElement => (
      <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
  ) );
     
  let authRedirect= null;
  let success = null;
  if (this.props.isAuthenticated)
  {
        success ="User Registered Successfully"
     authRedirect=<Redirect to="/dashboard" />
    
  } 


  


    return (
        <div>

        <Navbar/>
      <div className={style.form}>
         
        <form onSubmit={this.submitHandler} >
            <h3>Register</h3>
              {form}
              {success}
          <GreenButton type="submit">Sign Up</GreenButton>
        </form>
        {authRedirect}
        </div>
    </div>
    );
  }
}





export default connect(mapStateToProps,mapDispatchToProps)(SignUp);