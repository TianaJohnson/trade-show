import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserHeader from '../UserHeader/UserHeader';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import BikeTable from '../BikeTable/BikeTableBase';
import './Dashboard.css';

class Dashboard extends Component {
    

    addNew = () => {
        this.props.history.push('/show');
      }

    render(){
        return (
            <div className="dashboard">
                <br/>
                <Card className="dash-card">
                    <UserHeader/>
                    <br/>
                    <Button variant="contained" 
                            color="primary"
                            onClick={this.addNew}
                            style={{ margin: 10 }}>
                    New Show
                    </Button>
                    <br/>
                    <BikeTable key={this.props.id} match={this.props.match} history={this.props.history}/>
                </Card>
                <br/>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }

export default connect(mapStateToProps)(Dashboard);