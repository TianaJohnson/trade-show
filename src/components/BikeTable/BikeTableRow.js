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
            <TableCell>{this.props.intake.show}</TableCell>
            <TableCell>{this.props.intake.city}, {this.props.intake.state}</TableCell>   
            <TableCell>{this.props.intake.show_date}</TableCell>     
            <TableCell><Button variant="contained"
                    color="secondary"
                    style={{ margin: 10 }}>
                    Customer File
            </Button></TableCell>
            <TableCell> 
            </TableCell>

        </TableRow>
        
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(BikeTableRow);