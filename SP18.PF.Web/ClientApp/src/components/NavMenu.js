import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import { Authentication } from './Login';

export class NavMenu extends Component {
    displayName = NavMenu.name
    render() {
        if (Authentication.isAuthenticated) {
            return (
                <Navbar inverse fixedTop fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={'/'}>SP18.PF.Web</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={'/'} exact>
                                <NavItem>
                                    <Glyphicon glyph='home' /> Home
              </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/getvenues'}>
                                <NavItem>
                                    <Glyphicon glyph='th-list' /> Venues
              </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/events'}>
                                <NavItem>
                                    <Glyphicon glyph='th-list' /> Events
              </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/gettours'}>
                                <NavItem>
                                    <Glyphicon glyph='th-list' /> Tours
              </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/logout'}>
                                <NavItem>
                                    <Glyphicon glyph='off' /> Logout
              </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/UserTickets'}>
                                <NavItem>
                                    <Glyphicon glyph='th-list' /> Tickets
              </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar >
            );
        }
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>SP18.PF.Web</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='home' /> Home
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/getvenues'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Venues
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/events'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Events
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/login'}>
                            <NavItem>
                                <Glyphicon glyph='log-in' /> Login
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/register'}>
                            <NavItem>
                                <Glyphicon glyph='plus' /> Register
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/gettours'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Tours
              </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}