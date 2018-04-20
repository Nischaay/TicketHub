import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { Glyphicon } from 'react-bootstrap';

export class UserTickets extends Component {
    displayName = UserTickets.name

    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            loading: true
        };
        this.fetchAll();

    }

    fetchAll() {
        fetch('api/tickets/GetMyTickets', {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        )
            .then(response => response.json())
            .then(data => {
                this.setState({ tickets: data, loading: false });
            });
    }


    static renderTicketsTable(tickets) {
        return (
            <div>
                {tickets.map(event =>
                    <div key={event.id} className="well row col-md-12">
                        <div>
                            <div>
                                <h3> Tour: {event.event.tourName} </h3>
                                <h3> Venue: {event.event.venueName} </h3>
                                <hr />
                                <h3> Event Start Date: {event.event.eventStart} </h3>
                                <h3> Event End Date: {event.event.eventEnd} </h3>
                                <h3> Ticket Price: ${event.event.ticketPrice} </h3>
                                <br />
                                <button className="btn pull-right btn-danger">Bought this Ticket at ${event.event.ticketPrice}</button>
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
            ? <div><h1 class="fa fa-refresh fa-spin fa-lg"></h1> Loading </div>
            : UserTickets.renderTicketsTable(this.state.tickets);
        return (
            <div>
                <h1>Tickets Purchased</h1>
                <hr/>
                {contents}
            </div>
        );
    }
}
