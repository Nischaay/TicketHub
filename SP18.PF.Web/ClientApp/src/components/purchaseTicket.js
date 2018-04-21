import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const large = {
    'fontSize': 'x-large',
    'display': 'none',
}
export class purchaseTicket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: [],
            loading: true,
            url: window.location.href,
        };
        this.ticket = this.ticket.bind(this);
        this.verifyCard = this.verifyCard.bind(this);
        this.valid_credit_card = this.valid_credit_card.bind(this);
        this.getTicket();
        this.formSubmit = this.formSubmit.bind(this);
        this.assignTicket = this.assignTicket.bind(this);
    }

    valid_credit_card(value) {
        if (/[^0-9-\s]+/.test(value)) return false;

        var nCheck = 0, nDigit = 0, bEven = false;
        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
    }

    ticket() {
        return this.state.url.split('/').slice(-1);
    }

    formSubmit(e) {
        e.preventDefault();
        let messageBox = document.getElementById('notif');
        if (document.getElementById('cardNo').value.length > 0 && this.valid_credit_card(document.getElementById('cardNo').value)) {
            this.assignTicket();
        } else {
            messageBox.innerHTML = "<div class='alert alert-danger'> Invalid Card Information. Try Again!!</div>";
        }
    }

    assignTicket() {
        console.log(this.ticket());
        fetch('api/tickets/purchase/' + this.ticket(), {
            method: 'POST',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                let messageBox = document.getElementById('notif');
                if (data.id != null) {
                    messageBox.innerHTML = "<div class='alert alert-success'> Ticket Purchased. Thank You!!</div>";
                } else {
                    messageBox.innerHTML = "<div class='alert alert-danger'> Invalid Card Information. Try Again!!</div>";
                }
            });
    }
 
    verifyCard(e) {
        let num = e.target.value;
        let amex = document.getElementById('amex');
        let visa = document.getElementById('visa');
        let discover = document.getElementById('discover');
        let master = document.getElementById('master');
        let cards = [amex, visa, discover, master]

        if (num.substring(0, 1) == 4) {
            this.visa(cards);
        } else if (num.length >= 2 && num.substring(0, 2) == 34 || num.substring(0, 2) == 37) {
            this.amex(cards);
        } else if (num.length >= 2 && num.substring(0, 2).match(/^([5]|5[012345])$/)) {
            this.master(cards);
        } else if (num.match(/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/)) {
            this.discover(cards);
        }else{
            this.none(cards);
        }
    }

    discover(cards) {
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].getAttribute("name") == "discover") {
                cards[i].style.display = "block";
            }
        }
    }

    visa(cards) {
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].getAttribute("name") == "visa") {
                cards[i].style.display = "block";
            }
        }
    }

    master(cards) {
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].getAttribute("name") == "master") {
                cards[i].style.display = "block";
            }
        }
    }

    amex(cards) {
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].getAttribute("name") == "amex") {
                cards[i].style.display = "block";
            }
        }
    }

    none(cards) {
        for (var i = 0; i < cards.length; i++) {
                cards[i].style.display = "none";
        }
    }
    
    getTicket() {
        fetch('api/events/' + this.ticket())
            .then(response => response.json())
            .then(data => {
                this.setState({ event: data, loading: false });
            });
    }

    static getTicket(ticket) {
        return (
            <div>
                    <div className="well row col-md-12">
                        <div>
                        <div>
                                <h4> Tour: {ticket.tourName} </h4>
                                <h4> Venue: {ticket.venueName} </h4>
                                <hr />
                                <h4> Event Start Date: {ticket.eventStart} </h4>
                                <h4> Event End Date: {ticket.eventEnd} </h4>
                                <h4> Ticket Price: ${ticket.ticketPrice} </h4>
                                <br />
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <h1 className="fa fa-refresh fa-spin fa-lg"></h1>
            : purchaseTicket.getTicket(this.state.event);
        return (
            <div>
                <h1>Ticket Details</h1>
                {contents}
                <h1> Billing Info </h1>
                <hr />
                <div className="well col-md-offset-3 row col-md-5">
                    <div>
                        <div>
                            <form onSubmit={this.formSubmit}>
                                <div id="notif"></div>
                                <div className="form-group">
                                    <label htmlFor="name">Name on Card</label>
                                    <input type="name" className="form-control" id="name" placeholder="Cardholder's Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cardNo">Card Number</label> &nbsp;
                                    <i id="discover" name="discover" style={large} className="fa fa-cc-discover fa-6" aria-hidden="true">&nbsp;</i>
                                    <i id="master" name="master" style={large} className="fa fa-cc-mastercard fa-6" aria-hidden="true">&nbsp;</i>
                                    <i id="visa" name="visa" style={large} className="fa fa-cc-visa fa-6" aria-hidden="true">&nbsp;</i>
                                    <i id="amex" name="amex" style={large} className="fa fa-cc-amex fa-6" aria-hidden="true">&nbsp;</i>
                                    <input onChange={this.verifyCard} name="cardNo" maxLength="16" className="form-control" id="cardNo" placeholder="XXXX XXXX XXXX XXXX" />
                                </div>
                                <div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="date">Expiration Date</label>
                                        <input type="date" className="form-control" id="date" placeholder="MM/YY" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="code">CCV</label>
                                        <input className="form-control" id="code" maxLength="4" placeholder="CCV" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success pull-right"> Buy this ticket for ${this.state.event.ticketPrice} </button>
                            </form>
                        </div>
                        <div>
                        </div>
                        </div>
                    </div>
            </div>
        );

    }

}