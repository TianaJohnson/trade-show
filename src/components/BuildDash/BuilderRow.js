import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
//import BuildDash from '../BuildDash/BuildDash';
import './BuildDash.css';


class BuilderRow extends Component {

    buildFile = () => {
        this.props.history.push(`/builder/${this.props.intake.id}`);
    }

    

    deleteInfo = (event) => {
        const action = {
             type: 'DELETE_BUILDER_INFO',
             payload:{
                  id:this.props.BuilderRow.id },
                };
                console.log('delete builder action', action);
        this.props.dispatch(action);     
    }

    render() {
        return ( 
            <TableRow>
            <TableCell>{this.props.build.brand}</TableCell>
            <TableCell>{this.props.build.builder}</TableCell>  
            <TableCell><Button variant="contained"
                    color="secondary"
                    style={{ margin: 10 }}
                    onClick={this.showFile}>
                    Builder File
            </Button></TableCell>
            <TableCell>
            <Button variant="contained"
                    color="primary"
                    style={{ margin: 10 }}
                    onClick={this.deleteInfo}>
                    x
            </Button>
            </TableCell>
            <TableCell> 
            </TableCell>

        </TableRow>
        
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(BuilderRow);