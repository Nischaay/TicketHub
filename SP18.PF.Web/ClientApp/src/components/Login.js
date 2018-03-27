import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { log } from 'util';
import { Redirect, Route } from 'react-router-dom';

export const Authentication = {
    isAuthenticated: false,
}

export class Login extends Component {
    displayName = 'Login Form'
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            rememberMe: true,
             redirect: false
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
            .then(response => response.json())
            .then(data => {
                if (data.id != null) {
                    this.setState({ redirect: true })
                }
            })
        
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
        if (this.state.redirect) {
            Authentication.isAuthenticated = true;
            return <Redirect to="/Home" />
        } else {
            return (
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
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


}
