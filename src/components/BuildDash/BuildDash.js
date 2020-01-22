import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


class BuildDash extends Component {

    addNew = () => {
        this.props.history.push('/add');
      }
      
    render() {
        return (
            <div>
                <Card>
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