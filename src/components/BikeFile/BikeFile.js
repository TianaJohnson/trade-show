import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BikeFile.css';

class BikeFile extends Component {
    render() {
        return (
            <div></div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(BikeFile);