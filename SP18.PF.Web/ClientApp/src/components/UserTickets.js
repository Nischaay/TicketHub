import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { Glyphicon } from 'react-bootstrap';

export class UserTickets extends Component {
    displayName = UserTickets.name

    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            allTickets: [],
            searchTickets: 0,
            loading: true
        };
        this.fetchAll();

    }

    fetchAll() {
        fetch('api/tickets', {
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
                this.setState({ allTickets: data, loading: false });
            });
        this.searchTickets = this.searchTickets.bind(this);
    }

    searchTickets(id) {
        if (!id) {
            this.setState({ tickets: this.state.allTickets, loading: false });
        }
        else {
            fetch('api/tickets/' + id, {
                credentials: 'include'
            })
                .then(response => response.json())
                .then(data => {
                    console.log('search ticket', data);
                    const searchedTickets = this.state.allTickets.filter(x => x.id == data.id);
                    this.setState({ tickets: searchedTickets, loading: false });
                });
        }
    }

    static renderTicketsTable(tickets) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th>Purchase Price</th>
                        <th>Event</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>

                    {tickets.map(ticket =>
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.purchasePrice}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : UserTickets.renderTicketsTable(this.state.tickets);
        return (
            <div>
                <SearchBar onSearch={this.searchTickets} type="number" />
                <h1>Tickets</h1>
                {contents}
            </div>
        );
    }
}
