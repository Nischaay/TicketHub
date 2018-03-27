import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { log } from 'util';

export class Login extends Component {
    displayName = 'Login Form'
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            rememberMe: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    SubmitLoginForm() {
        console.log('submit called');
        fetch('api/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                rememberMe : this.state.rememberMe,
            })
        })
            .then(response => console.log(response))
            .catch((error) => {
                console.error('error while login', error);
            });
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(event) {
        this.SubmitLoginForm();
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        
    }

    handleChangeRadio = event => {
        this.setState({ 
            [event.currentTarget.id]: event.currentTarget.checked
        });
    }
    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Sign In</h2>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            type="password"
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    
                    <label>
                        Remember me:
                    </label>
                    <input
                            name="rememberMe"
                            type="checkbox"
                            id="rememberMe"
                            checked={this.state.rememberMe}
                            onChange={this.handleChangeRadio} />
                        
                       
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                    >
                        Login
              </Button>
                </form>
            </div>
        );
    }


}
