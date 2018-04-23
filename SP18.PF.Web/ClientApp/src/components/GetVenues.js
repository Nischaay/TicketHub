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
            var images = [
            "http://3.bp.blogspot.com/-2NGV_Hq4Bxo/VcTJanCeQFI/AAAAAAAAGrs/X1sHq2vzeN0/s1600/NYPopsWideShot080615.JPG",
            "https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/6599/SITours/chelsea-football-match-at-stamford-bridge-stadium-in-london-162828.jpg",
            "http://globalmedicalco.com/photos/globalmedicalco/4/19533.jpg",
            "https://traveldigg.com/wp-content/uploads/2016/08/New-Orleans-Downtown-Skyline-720x404.jpg"
        ];
        return (
            <div>
                {venues.map(tour =>
                    <div key={tour.id} className="well col-md-offset-1 row col-md-3">
                        <div>
                            <div>
                                <img height="250px" width="275px" src={images[tour.id - 1]} />
                                <h3> {tour.name} </h3>
                                <span className="badge">Capacity: {tour.capacity}</span>
                                <hr />
                                <p> Address: {tour.physicalAddress.addressLine1} </p>
                                <p> City: {tour.physicalAddress.city}, {tour.physicalAddress.state},  {tour.physicalAddress.zipCode} </p>
                                <p> {tour.description} </p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <h1 class="fa fa-refresh fa-spin fa-lg"></h1>
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
