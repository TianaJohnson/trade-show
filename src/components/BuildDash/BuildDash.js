import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import BuildTable from './BuilderTable';


class BuildDash extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SHOW', payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: 'FETCH_BUILDER', payload: { id: this.props.match.params.id } })
      }

    addNew = () => {
        this.props.history.push('/build');
      }

    render() {
       // const info = this.props.reduxStore.builder.builderReducer;
        return (
            
            <div>
                
                <Card>
                    <p>Show:</p>
                    {/* {JSON.stringify(this.props.reduxStore.builder.builderReducer)} */}
                    <br/>
                    <Button variant="contained"
                    color="primary"
                    style={{ margin: 10 }}
                    onClick={this.addNew}>
                    Add Builder Information
                    </Button>
                    <Button variant="contained"
                    color="primary"
                    style={{ margin: 10 }}
                    onClick={this.builderIntake}>
                    x
                    </Button>
                    <br/>
                    <BuildTable/>
                </Card>
            </div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
    
export default connect(mapStateToProps)(BuildDash);