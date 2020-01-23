import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BuilderIntake.css';

class BuilerIntake extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_BUILDER', payload: { id: this.props.match.params.id } });   
    }

    projectIn = (event) => {
        console.log('project In');
        const action = {
            type: 'ADD_PROJECT',
            payload: this.props.reduxStore.project.projectReducer,
        };
        console.log('sending to project saga')
        this.props.dispatch(action);
        this.setState({
            show_name: '',
            brand: '',
            first_name:'',
            last_name:'',
            build_city:'',
            build_sate:'',
            build_country:'',
            show_id:this.props.match.params.id,
        })
        this.props.history.push(`/show/${this.props.intake.id}`);
    }
//Send to saga to create a customer in the data base


  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });

    console.log(evt.target.name, ': ' , evt.target.value);
    // ^ This shows what name(state) we are updating in each input
    // and what the actual intake is.
    }

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
                    <TextField id="locationIntake" 
                            variant="outlined"
                            label="Location"
                            name="location"
                            style={{ marginLeft: 10 }}
                            value={this.state.location}
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
                    <br/>
                    <br/>
                        <h2>New Builder Information</h2>
                        
                        <h3>Builder Identification</h3>
                    <TextField id="firstNameIntake" 
                               label="First Name" 
                               name="first_name"
                               variant="outlined"
                               value={this.state.first_name}
                                onChange={this.handleChange}>
                    </TextField>
                    <TextField id="lastNameIntake" 
                               variant="outlined"
                               label="Last Name"
                               name="last_name"
                               style={{ marginLeft: 10 }}
                               value={this.state.last_name}
                                onChange={this.handleChange}>
                    </TextField>
                    <br/>
                    <br/>
                    <h3> Where are they outta?</h3>
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
                    <br/>
                    <h3>Whats the Brand?</h3>
                    <TextField id="brandIntake" 
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
export default connect(mapStateToProps)(BuilerIntake);