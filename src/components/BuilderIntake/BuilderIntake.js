import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './BuilderIntake.css';

class BuilerIntake extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_BUILDER', payload: { id: this.props.match.params.id } });   
    }

    addBuilder = (event) => {
        console.log('Builder info');
        const action = {
            type: 'ADD_BUILDER',
            payload: this.props.reduxStore.builder.builderReducer,
        };
        console.log('sending to builder saga')
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
        const build = this.props.reduxStore.builder.builderReducer;
        return (
            <div>
                <Card className="addNewCard">
                    <div className="new-build-form">
                        <h1>Builder Information</h1>
                    <div className="new-build-fields">  
                    <TextField id="brandIntake" 
                            label="Brand" 
                            name="brand"
                            variant="outlined"
                            style={{ marginLeft: 10 }}
                            value={build.brand}
                            onChange={this.handleChange}>
                    </TextField>
                    <TextField id="fNameIntake" 
                            variant="outlined"
                            label="First Name"
                            name="first_name"
                            style={{ marginLeft: 10 }}
                            value={build.first_name}
                            onChange={this.handleChange}>
                    </TextField>
                    <TextField id="lNameIntake" 
                            variant="outlined"
                            label="Last Name"
                            name="last_name"
                            style={{ marginLeft: 10 }}
                            value={build.last_name}
                            onChange={this.handleChange}>
                    </TextField>
                    <TextField id="firstNameIntake" 
                               label="City" 
                               name="build_city"
                               variant="outlined"
                               style={{ marginLeft: 10 }}
                               value={build.build_city}
                                onChange={this.handleChange}>
                    </TextField>
                    <TextField id="lastNameIntake" 
                               variant="outlined"
                               label="State"
                               name="build_state"
                               style={{ marginLeft: 10 }}
                               value={build.build_state}
                                onChange={this.handleChange}>
                    </TextField>
                    <br/>
                    <br/>
                    <h3> Where are they outta?</h3>
                    <TextField id="stateIntake" 
                               variant="outlined"
                               label="Country"
                               name="build_country"
                               value={build.build_country}
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
export default connect(mapStateToProps)(BuilerIntake);