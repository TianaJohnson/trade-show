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
                        <h3 className="newBuild-title">New Builder Information</h3>
                    <br/>
                    Builder Name
                    <br/>
                    <div className="new-input-fields">
                    <TextField id="outlined-basic" 
                               label="Outlined" 
                               variant="outlined"
                               lable="Builder Name">
                    </TextField>
                    <TextField id="outlined-basic" 
                               label="Outlined" 
                               variant="outlined"
                               lable="Builder Name"
                               style={{ marginLeft: 10 }}>
                    </TextField>
                    </div>
                    <br/>
                    <Button variant="contained" 
                            color="secondary"
                            //onClick={}
                            style={{ marginTop: 10 }}>
                    Build!
                    </Button>
                    <br/>
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