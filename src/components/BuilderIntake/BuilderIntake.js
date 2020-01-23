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


    render() {

        return (
            
            <div>
                
            </div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(BuilerIntake);