import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { log } from 'util';

export class Logout extends Component {
    displayName = 'Logout'
    constructor(props) {
        super(props);
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
            .then(response => console.log(response))
            .catch((error) => {
                console.log('Error' + error);
            });
    }

    handleSubmit(event) {
        this.LogOut();
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleSubmit}
                    block
                    bsSize="large"
                    type="submit"
                >
                    Login
              </Button>
            </div>
        )
    }
}