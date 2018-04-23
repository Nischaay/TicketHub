import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            allEvents: [],
            searchEvent: 0,
            loading: true
        };
        this.getAllEvents();
    }

    getAllEvents() {
        fetch('api/events')
            .then(response => response.json())
            .then(data => {
                this.setState({ events: data, loading: false });
                this.setState({ allEvents: data, loading: false });
            });
        this.searchEvents = this.searchEvents.bind(this);

    }

    searchEvents(id) {
        if (!id) {
            this.setState({ events: this.state.events, loading: false });
        }
        else {
            fetch('api/events/' + id)
                .then(response => response.json())
                .then(data => {
                    console.log('search event', data);
                    const searchedEvents = this.state.events.filter(x => x.id == data.id);
                    this.setState({ events: searchedEvents, loading: false });
                });
        }
    }

    static getEventsTable(allEvents) {
        return (
            <div>
                {allEvents.map(event =>
                    <div key={event.id} className="well col-md-offset-1 row col-md-3">
                        <div>
                            <div>
                                <h3> Tour: {event.tourName} </h3>
                                <h3> Venue: {event.venueName} </h3>
                                <hr />
                                <h3> Event Start Date: {event.eventStart} </h3>
                                <h3> Event End Date: {event.eventEnd} </h3>
                                <h3> Ticket Price: ${event.ticketPrice} </h3>
                                <br />
                                <LinkContainer to={'purchaseTicket/' + event.id}>
                                    <button className="btn pull-right btn-success"> Buy this ticket </button>
                                </LinkContainer>
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
            : Events.getEventsTable(this.state.events);
        return (
            <div>
                <SearchBar onSearch={this.searchEvents} type="number" />
                <h1>Events</h1>
                {contents}
            </div>
        );

    }

}