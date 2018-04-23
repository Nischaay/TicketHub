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
        var images = [
            "http://brunomars.us/wp-content/uploads/2015/01/Bruno-Mars-Concert-In-Lasvegas.jpg",
            "https://bloximages.chicago2.vip.townnews.com/bozemandailychronicle.com/content/tncms/assets/v3/editorial/a/ba/abaa5f36-3af8-5c7f-8dd5-32bbf7d6e85e/5a8da55ba5870.image.jpg?resize=1200%2C797",
            "https://vignette.wikia.nocookie.net/karlacamilacabello/images/4/43/Camila-cabello-performs-at-zedd-s-welcome-aclu-benefit-concert-4-3-2017-1.jpg/revision/latest?cb=20170407043551",
            "https://s3.amazonaws.com/ssglobalcdn/performers/wide/taylor-swift.jpg"
        ];
        return (
            <div>
                {tours.map(tour =>
                    <div key={tour.id} className="well col-md-offset-1 row col-md-3">
                        <div>
                            <div>
                                <img height="250px" width="275px" src={images[tour.id-1]} />
                                <h3> {tour.name} </h3>
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
