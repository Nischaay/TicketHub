import React, { Component } from 'react';
import { SearchBar } from './SearchBar';

export class GetTours extends Component {
    displayName = GetTours.name

    constructor(props) {
        super(props);
        this.state = {
            tours: [],
            allTours: [],
            searchTour: 0,
            loading: true
        };
        this.fetchAll();

    }

    fetchAll() {
        fetch('api/tours')
            .then(response => response.json())
            .then(data => {
                this.setState({ tours: data, loading: false });
                this.setState({ allTours: data, loading: false });
            });
        this.searchTours = this.searchTours.bind(this);
    }

    searchTours(id) {
        if (!id) {
            this.setState({ tours: this.state.allTours, loading: false });
        }
        else {
            fetch('api/tours/' + id)
                .then(response => response.json())
                .then(data => {
                    console.log('search tours', data);
                    const searchedTours = this.state.allTours.filter(x => x.id == data.id);
                    this.setState({ tours: searchedTours, loading: false });
                });
        }
    }

    static renderToursTable(tours) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>

                    {tours.map(tour =>
                        <tr key={tour.id}>
                            <td>{tour.id}</td>
                            <td>{tour.name}</td>
                            <td>{tour.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : GetTours.renderToursTable(this.state.tours);
        return (
            <div>
                <SearchBar onSearch={this.searchTours} type="number" />
                <h1>Tours</h1>
                {contents}
            </div>
        );
    }
}
