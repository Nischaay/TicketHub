import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { log } from 'util';
import { Redirect, Route } from 'react-router-dom';
import { Authentication } from './Login';


export class Logout extends Component {
    displayName = 'Logout'
    constructor(props) {
        super(props);
        this.state = { redirect: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    LogOut() {
        fetch('api/users/Logout', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        })
            .then(response =>  {
                this.setState({ redirect: true });
            });
    }

    handleSubmit(event) {
        this.LogOut();
        event.preventDefault();
    }

    render() {
        if (this.state.redirect) {
            Authentication.isAuthenticated = false;
            return <Redirect to="/" />;
        } else {
            return (
                <div>
                    <Button onClick={this.handleSubmit}
                        block
                        bsSize="large"
                        type="submit"
                    >
                        Logout
              </Button>
                </div>
            )
        }
    }
}