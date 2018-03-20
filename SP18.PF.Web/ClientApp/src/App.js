import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { GetVenues } from './components/GetVenues';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { GetTours } from './components/GetTours';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetchdata' component={FetchData} />
                <Route path='/getvenues' component={GetVenues} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/gettours' component={GetTours} />

            </Layout>
        );
    }
}
