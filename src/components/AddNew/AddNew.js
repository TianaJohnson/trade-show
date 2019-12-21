import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddNew.css';

class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: '',
            location: '',
            date: '',
            first: '',
            last: '',
            state: '',
            city: '',
            country: '',
            brand: ''
        }
        
    }

  //Send to saga to create a customer in the data base
  addBuilder = event => {
    console.log("add show information");
    const action = {
      type: "ADD_SHOW",
      payload: this.state
    };
    this.props.dispatch(action);
    this.setState({
        show: "",
        location: "",
        date: "",
        first: "",
        last: "",
        state: "",
        city: "",
        country: "",
        brand: ""
    });
    this.props.history.push("/");
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(this.state.value, evt.target.value)
    }

    render() {
        return (
            <div>
                <Card className="addNewCard">
                    <div className="new-build-form">
                        <h1>Show Information</h1>
                    <div className="new-input-fields">  
                    <TextField id="outlined-basic" 
                            label="Show" 
                            name="show"
                            variant="outlined"
                            value={this.state.show}
                            onChange={this.handleChange}>
                    </TextField>
                    <TextField id="outlined-basic" 
                            variant="outlined"
                            label="Location"
                            name="location"
                            style={{ marginLeft: 10 }}
                            value={this.state.location}
                            onChange={this.handleChange}>
                    </TextField>
                    <br/>
                    <br/>
                        <h2>New Builder Information</h2>
                        
                        <h3>Builder Identification</h3>
                    <TextField id="outlined-basic" 
                               label="First Name" 
                               name="first"
                               variant="outlined"
                               value={this.state.first}
                                onChange={this.handleChange}>
                    </TextField>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="Last Name"
                               name="last"
                               style={{ marginLeft: 10 }}
                               value={this.state.last}
                                onChange={this.handleChange}>
                    </TextField>
                    <br/>
                    <br/>
                    <h3> Where are they outta?</h3>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="State"
                               name="state"
                               value={this.state.state}
                               onChange={this.handleChange}>
                    </TextField>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="City/Providence"
                               name="city"
                               style={{ marginLeft: 10 }}
                               value={this.state.city}
                               onChange={this.handleChange}>
                    </TextField>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="Country"
                               name="country"
                               style={{ marginLeft: 10 }}
                               value={this.state.country}
                               onChange={this.handleChange}>
                    </TextField>
                    <br/>
                    <h3>Whats the Brand?</h3>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="Brand Name"
                               name="brand"
                               value={this.state.brand}
                            onChange={this.handleChange}>
                    </TextField>
                    </div>
                    <br/>
                    <Button variant="contained" 
                            color="secondary"
                            onClick={this.addBuilder}
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
export default connect(mapStateToProps)(AddNew);