import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { Glyphicon } from 'react-bootstrap';

export class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            allEvents: [],
            searchEvent: 0,
            loading:true
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
            this.setState({ events: this.state.allEvents, loading: false });
        }
        else {
            fetch('api/events/' + id)
                .then(response => response.json())
                .then(data => {
                    console.log('search event', data);
                    const searchedEvents = this.state.allEvents.filter(x => x.id == data.id);
                    this.setState({ events: searchedEvents, loading: false });
                });
        }
    }

    static getEventsTable(allEvents) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th>VenueName</th>
                        <th>TourName</th>
                        <th>TicketPrice</th>
                        <th>StartDate</th>
                        <th>EndDate</th>
                    </tr>
                </thead>
                <tbody>

                    {allEvents.map(event =>
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.venueName}</td>
                            <td>{event.tourName}</td>
                            <td>{event.ticketPrice}</td>
                            <td>{event.eventStart}</td>
                            <td>{event.eventEnd}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
            let contents = this.state.loading
                ? <p><em>Loading...</em></p>
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