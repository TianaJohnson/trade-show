import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="main-div">
                <br/>
                <Card className="main-card">
                    {/* Will be linked to show id files */}
                <Button color="primary"
                        variant="contained" 
                        //className="newsh-btn"
                        style={{ margin: 10 }}>
                            New Show
                            </Button>
                
                </Card>
                <br/>
            </div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(Main);