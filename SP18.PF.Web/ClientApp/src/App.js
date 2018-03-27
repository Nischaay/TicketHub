import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { GetVenues } from './components/GetVenues';
import { Login, Authentication } from './components/Login';
import { Register } from './components/Register';
import { Events } from './components/Events';
import { GetTours } from './components/GetTours';
import { UserDashboard } from './components/UserDashboard';
import {Logout} from './components/Logout'


export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/getvenues' component={GetVenues} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/gettours' component={GetTours} />
                <Route path='/Events' component={Events} />
                <Route path='/Logout' component={Logout} />
                
            </Layout>
        );
    }
}

//const PrivateRoute = ({ component: Component, ...rest }) => {
//    return (
//        <Route
//            {...rest}
//            render={props =>
//                Authentication.isAuthenticated === true ? (
//                    <Component {...props} />
//                ) : (
//                        <Redirect
//                            to={{ pathname: "/login", state: { from: props.location } }}
//                        />
//                    )}
//        />);
//};