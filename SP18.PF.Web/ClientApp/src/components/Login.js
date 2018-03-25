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
            remeberMe: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    SubmitLoginForm() {
        console.log('submit called');
        fetch('api/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                remeberMe : this.state.remeberMe,
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

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <h2 class="form-signin-heading">Sign In</h2>
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
                    <form>
                        <label>
                            Is going:
                       <input
                                name="Remember me"
                                type="checkbox"
                                checked = "false"
                                value={this.state.remeberMe}
                                onChange={this.handleChange} />
                        </label>
                        </form>
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
