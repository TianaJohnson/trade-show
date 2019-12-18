import React, { Component } from 'react';
//import { connect } from 'react-redux';
import UserHeader from '../UserHeader/UserHeader';

class Dashboard extends Component {

    render(){
        return (
            <div>
                <UserHeader/>
                <br/>
            </div>
        )
    }
}

export default Dashboard;