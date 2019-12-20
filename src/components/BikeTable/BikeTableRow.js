import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BikeTable.css';


class BikeTableRow extends Component {
    render() {
        return (
            <div></div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(BikeTableRow);