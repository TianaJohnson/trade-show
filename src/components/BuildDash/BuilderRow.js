import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
//import BuildDash from '../BuildDash/BuildDash';
import './BuildDash.css';


class BuilderRow extends Component {

    showFile = () => {
        this.props.history.push(`/show/${this.props.intake.id}`);
    }

    

    deleteInfo = (event) => {
        const action = {
             type: 'DELETE_SHOW_INFO',
             payload:{
                  id:this.props.intake.id },
                };
                console.log('delete action', action);
        this.props.dispatch(action);     
    }

    render() {
        return ( 
            <TableRow>
            <TableCell>{this.props.intake.show}</TableCell>
            <TableCell>{this.props.intake.city}, {this.props.intake.state}</TableCell>   
            <TableCell>{this.props.intake.show_date}</TableCell>     
            <TableCell><Button variant="contained"
                    color="secondary"
                    style={{ margin: 10 }}
                    onClick={this.showFile}>
                    Customer File
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