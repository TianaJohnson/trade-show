import React, { Component } from 'react';
//import { connect } from 'react-redux';
import UserHeader from '../UserHeader/UserHeader';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import './Dashboard.css';

class Dashboard extends Component {

    render(){
        return (
            <div className="dashboard">
                <br/>
                <Card className="dash-card">
                    <UserHeader/>
                    <br/>
                    <Button variant="contained" 
                            color="primary">
                    Primary
                    </Button>
                </Card>
                <br/>
            </div>
        )
    }
}

export default Dashboard;