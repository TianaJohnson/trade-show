import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableBody from "@material-ui/core/TableBody";
import BikeTableRow from "./BikeTableRow";
import "./BuilderDash.css";



class BuilderTable extends Component {


  render() {

    return (
      
      <Paper>
       
        <Table className="main-table">
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>Builder Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>file</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         {this.props.show.map(intake =>
           <BikeTableRow key={intake.id} history={this.props.history} build={build} match={this.props.match}/>
         )}
         
       
   </TableBody>
        </Table>
      </Paper>
    );
  }
}
const mapStateToProps = reduxStore => ({
  ...reduxStore,
  show: reduxStore.add.showIntakeReducer,
});
export default connect(mapStateToProps)(BuilderTable);
