import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import './BikeTable.css';


class BikeTableRow extends Component {

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
            <TableCell>{this.props.intake.brand}</TableCell>
            <TableCell>{this.props.intake.last_name}, {this.props.intake.first_name}</TableCell>
            <TableCell> <Button variant="contained"
                size="small"
                color="primary"
                style={{ margin: 10 }}>
                Edit
            </Button></TableCell>
            <TableCell><Button variant="contained"
                    color="secondary"
                    style={{ margin: 10 }}>
                    Customer File
            </Button></TableCell>
            <TableCell> 
                <Button variant="contained"
                    color="inherit"
                    onClick={this.deleteInfo}
                    style={{ margin: 10 }}>
                    Delete
                </Button>
            </TableCell>

        </TableRow>
        
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(BikeTableRow);