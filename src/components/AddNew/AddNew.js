import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddNew.css';

class AddNew extends Component {
    render() {
        return (
            <div>
                <Card className="addNewCard">
                    <div className="new-build-form">
                        <h2 className="newBuild-title">New Builder Information</h2>
                    <br/>
                    <TextField id="outlined-basic" 
                               label="Outlined" 
                               variant="outlined">
                    </TextField>
                    <br/>
                    <Button variant="contained" 
                            color="secondary"
                            //onClick={}
                            style={{ marginTop: 10 }}>
                    Build!
                    </Button>
                    </div>
                </Card>
            </div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(AddNew);