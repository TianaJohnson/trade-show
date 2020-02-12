import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
//import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import BikeTableRow from "./BikeTableRow";
import "./BikeTable.css";

//hooks

class BikeTableBase extends Component {

  // componentDidMount() {
  //   this.props.dispatch({ type: 'FETCH_SHOW', payload: { id: this.props.match.params.id } });    
  // }

  
//note: params where undefined because this was a component being used inside a component
//props still needed to be pased through the route located on the main component
//component inception!
  render() {

    return (
      
      <Paper>
       
        <Table className="main-table">
          <TableHead>
            <TableRow>
              <TableCell>show</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Show Date</TableCell>
              <TableCell>View Customer File</TableCell>
              <TableCell>Remove Show</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         {this.props.show.map(intake =>
           <BikeTableRow key={intake.id} history={this.props.history} intake={intake} match={this.props.match}/>
         )}
         
       
   </TableBody>
        </Table>
      </Paper>
    );
  }
}
const mapStateToProps = reduxStore => ({
  ...reduxStore,
  show: reduxStore.show.showReducer,
});
export default connect(mapStateToProps)(BikeTableBase);
