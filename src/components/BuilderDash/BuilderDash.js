import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


class BuilderDash extends Component {
    render() {
        return (
            <div>
                <Card>
                    <br/>
                    <Button>

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
export default connect(mapStateToProps)(BuilderDash);