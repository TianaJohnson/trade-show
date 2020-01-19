import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ShowIntake extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: '',
            show_date: '',
            state: '',
            city: '',
            country: '',
        }      
    }

  //Send to saga to create a customer in the data base
  addShow = event => {
    console.log("add show information");
    const action = {
      type: "ADD_SHOW",
      payload: this.state
    };
    this.props.dispatch(action);
    this.setState({
        show: '',
        show_date: '',
        state: '',
        city: '',
        country: ''
    });
    this.props.history.push("/");
  };


    render() {
        return (
            <div>
                <Card className="addNewCard">
                    <div className="new-build-form">
                        <h1>Show Information</h1>
                    <div className="new-input-fields">  
                    <TextField id="showIntake" 
                            label="Show" 
                            name="show"
                            variant="outlined"
                            value={this.state.show}
                            onChange={this.handleChange}>
                    </TextField>
                    <TextField id="showDateIntake" 
                            variant="outlined"
                            label="date"
                            name="show_date"
                            style={{ marginLeft: 10 }}
                            value={this.state.show_date}
                            onChange={this.handleChange}>
                    </TextField>
                    <TextField id="stateIntake" 
                               variant="outlined"
                               label="State"
                               name="state"
                               value={this.state.state}
                               onChange={this.handleChange}>
                    </TextField>
                    <TextField id="cityIntake" 
                               variant="outlined"
                               label="City/Providence"
                               name="city"
                               style={{ marginLeft: 10 }}
                               value={this.state.city}
                               onChange={this.handleChange}>
                    </TextField>
                    <TextField id="countryIntake" 
                               variant="outlined"
                               label="Country"
                               name="country"
                               style={{ marginLeft: 10 }}
                               value={this.state.country}
                               onChange={this.handleChange}>
                    </TextField>
                    </div>
                    <br/>
                    <Button variant="contained" 
                            color="secondary"
                            onClick={this.addShow}
                            style={{ marginTop: 10 }}>
                    Add Builder!
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
export default connect(mapStateToProps)(ShowIntake);