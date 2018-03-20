import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { log } from 'util';

export class Register extends Component {
    displayName = 'Register form'
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            billingAddress: {
                addressLine1: "",
                addressLine2: "",
                zipCode: "",
                city: "",
                state: ""
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    SubmitRegisterForm() {
        console.log('submit called');
        fetch('api/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                confirmpassword: this.state.confirmPassword,
                billingAddress: {
                    addressLine1: this.state.addressLine1,
                    addressLine2: this.state.addressLine2,
                    zipCode: this.state.zipCode,
                    city: this.state.city,
                    state: this.state.state,
                }

            })
        })
            .then(response => console.log(response))
            .catch((error) => {
                console.error('error while register', error);
            });
    }

    validateForm() {
        return
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.confirmPassword > 0 &&
            this.state.addressLine1 > 0 &&
            this.state.zipCode > 0 &&
            this.state.zipCode < 5 &&
            this.state.city > 0 &&
            this.state.state > 0;
    }

    handleSubmit(event) {
        this.SubmitRegisterForm();
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div className="Register">
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
                    <FormGroup controlId="confirmPassword" bsSize="large">
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl
                            value={this.state.confirmPassword}
                            type="password"
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    <FormGroup controlId="addressLine1" bsSize="large">
                        <ControlLabel>Address Line 1</ControlLabel>
                        <FormControl
                            value={this.state.addressLine1}
                            type="string"
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    <FormGroup controlId="addressLine2" bsSize="large">
                        <ControlLabel>Address Line 2</ControlLabel>
                        <FormControl
                            value={this.state.addressLine2}
                            type="string"
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    <FormGroup controlId="state" bsSize="large">
                        <ControlLabel>State</ControlLabel>
                        <FormControl
                            value={this.state.state}
                            type="string"
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    <FormGroup controlId="city" bsSize="large">
                        <ControlLabel>City</ControlLabel>
                        <FormControl
                            value={this.state.city}
                            type="string"
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    <FormGroup controlId="zipCode" bsSize="large">
                        <ControlLabel>ZipCode</ControlLabel>
                        <FormControl
                            value={this.state.zipCode}
                            type="string"
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                    >
                        Register
              </Button>
                </form>
            </div>
        );
    }


}
