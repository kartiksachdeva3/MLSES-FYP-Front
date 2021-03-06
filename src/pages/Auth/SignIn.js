import React, { Component } from "react";
import style from './SignUp.module.css';
import Input from "../../components/CustomInput/Input";
import GreenButton from "../../components/Buttons/Button";
import { Redirect } from "react-router-dom";
import Spinner from "../../components/assets/Spinner/Spinner";
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        isAuthenticated: state.auth.idToken !== null,
        token: state.auth.idToken

    };
 };

 const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password )),
        forUser: (token) => dispatch(actions.userdata(token))
    };
  }

class SignIn extends Component {
  state = {
      user:{
        email: {
          elementType: 'input',
          elementConfig: {
              type: 'email',
              placeholder: 'Mail Address'
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
              placeholder: 'Password'
          },
          value: '',
          validation: {
              required: true,
              minLength: 6
          },
          valid: false,
          touched: false
        }
      },
      toSignUp: false
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
     this.props.onAuth(this.state.user.email.value, this.state.user.password.value);
     
     
    
 }

 getUserdata = () => {
    this.props.forUser(this.props.token);
 }

 redirectSignUpHandler = () => {
    this.setState({ toSignUp: true });
       
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
     
     if (this.props.loading) {
        form = <Spinner />
        }
    
    if(this.state.toSignUp){
        return <Redirect to="/signup" />;
    }

    let authRedirect= null;
    if (this.props.isAuthenticated)
    {
       authRedirect=<Redirect to="/dashboard" />
    //    axios.defaults.headers = {
    //     'Content-Type': 'application/json',
    //     Authorization: 'bearer ' + this.props.token

        
    // }  
    
     
    // let url = 'http://localhost:3001/api/users'
    // axios.get(url)
    // .then(response => {
    //     console.log(response);
        
        
    // })
    // .catch(err => 
    //     {
    //          console.log(err);
        
    // })
    
    // 
}
  

    

    return (
      <div className={style.form}>
          
         {authRedirect}
        <form  onSubmit={this.submitHandler}>
            <h3>Login</h3>
              {form}
          <GreenButton  type="submit">Login</GreenButton> 
        </form>

        <GreenButton onClick= {this.redirectSignUpHandler} type="submit">Sign Up</GreenButton>
       
    </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
