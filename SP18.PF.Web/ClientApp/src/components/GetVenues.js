import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import {Glyphicon} from 'react-bootstrap';

export class GetVenues extends Component {
    displayName = GetVenues.name

    constructor(props) {
        super(props);
        this.state = {
            venues: [],
            allVenues: [],
            searchVenue: 0,
            loading: true
        };
        this.fetchAll();

    }

    fetchAll() {
        fetch('api/venues')
            .then(response => response.json())
            .then(data => {
                this.setState({ venues: data, loading: false });
                this.setState({ allVenues: data, loading: false });
            });
        this.searchVenues = this.searchVenues.bind(this);
    }

    searchVenues(id) {
        if (!id) {
            this.setState({ venues: this.state.allVenues, loading: false });
        }
        else {
            fetch('api/venues/' + id)
                .then(response => response.json())
                .then(data => {
                    console.log('search venue', data);
                    const searchedVenues = this.state.allVenues.filter(x => x.id == data.id);
                    this.setState({ venues: searchedVenues, loading: false });
                });
        }
    }

    static renderVenuesTable(venues) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>

                    {venues.map(venue =>
                        <tr key={venue.id}>
                            <td>{venue.id}</td>
                            <td>{venue.name}</td>
                            <td>{venue.description}</td>
                            <td>{venue.capacity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : GetVenues.renderVenuesTable(this.state.venues);
        return (
            <div>
                <SearchBar onSearch={this.searchVenues} type="number" />
                <h1>Venues</h1>
                {contents}
            </div>
        );
    }
}
