import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

class AddNew extends Component {
    render() {
        return (
            <div>
                <Card className="addNewCard">
                    <TextField id="outlined-basic" 
                               label="Outlined" 
                               variant="outlined">
                    </TextField>
                </Card>
            </div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(Template);