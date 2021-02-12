import React from 'react'
import './SignIn.css'
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

function SignIn() {

   const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("FORM SUBMIT!");

    }

    return (
        <div className='LoginPage'>
            <div className={'divStyle'}>
                <Card className={'panelStyle'}>
                    <Form horizontal className="LoginForm" id="loginForm">
                        <FormGroup controlId="formEmail">
                            <FormControl type="email" placeholder="Email Address" />
                        </FormGroup>
                        <FormGroup controlId="formPassword">
                            <FormControl type="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup className={'buttonStyle'} controlId="formSubmit">
                            <Button bsStyle="primary" type="submit" onClick={handleFormSubmit}>
                                Login
              </Button>
                        </FormGroup>
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default SignIn
