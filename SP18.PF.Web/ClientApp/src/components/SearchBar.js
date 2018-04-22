import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            loading: true,
            type: 'string'
        };
        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    search() {
        this.props.onSearch(this.state.searchValue);
    }

    renderSearchBar() {
        return (
            
            <FormGroup controlId="searchValue">
                <div class="row">
                    <div class="col-md-10">
                    <FormControl
                        value={this.state.searchValue}
                        type={this.props.type}
                        onChange={this.handleChange}
                        placeholder={"Search.."}

                    />
                    </div>
                   
                        <button class="btn btn-primary" onClick={this.search}><i class="glyphicon glyphicon-search"></i></button>
                  
                </div>
                </FormGroup>

            
        );
    }

    render() {
        let searchBarContent = this.renderSearchBar();
        return (
            <div>
                {searchBarContent}
            </div>
        );
    }
}
