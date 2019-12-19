import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

class AddNew extends Component {
    render() {
        return (
            <div>
                <Card className="addNewCard">

                </Card>
            </div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(Template);