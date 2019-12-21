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
                            variant="outlined">
                    </TextField>
                    <TextField id="outlined-basic" 
                            variant="outlined"
                            label="Location"
                            style={{ marginLeft: 10 }}>
                    </TextField>
                    <br/>
                    <br/>
                        <h2>New Builder Information</h2>
                        
                        <h3>Builder Identification</h3>
                    <TextField id="outlined-basic" 
                               label="First Name" 
                               variant="outlined"
                               value={this.state.first}
                                onChange={this.handleChange}>
                    </TextField>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="Last Name"
                               style={{ marginLeft: 10 }}>
                    </TextField>
                    <br/>
                    <br/>
                    <h3> Where are they outta?</h3>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="State">
                    </TextField>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="City/Providence"
                               style={{ marginLeft: 10 }}>
                    </TextField>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="Country"
                               style={{ marginLeft: 10 }}>
                    </TextField>
                    <br/>
                    <h3>Whats the Brand?</h3>
                    <TextField id="outlined-basic" 
                               variant="outlined"
                               label="Brand Name">
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