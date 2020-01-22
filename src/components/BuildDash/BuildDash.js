import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


class BuildDash extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SHOW', payload: { id: this.props.match.params.id } });    
      }

    addNew = () => {
        this.props.history.push('/add');
      }

    render() {
        return (
            <div>
                <Card>
                    {/* Show:{this.props.} */}
                    <br/>
                    <Button variant="contained"
                    color="primary"
                    style={{ margin: 10 }}
                    onClick={this.builderIntake}>
                    x
                    </Button>
                    <br/>
                </Card>
            </div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(BuildDash);