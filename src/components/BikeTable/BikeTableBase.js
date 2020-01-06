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



class BikeTableBase extends Component {

  constructor(props){
    super(props);
    this.state = {
        show: [],
    }
}

/// This will be delt with later

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SHOW', payload: { id: this.props.match.params.id } });
    }

  render() {

    return (
      <Paper>
        <Table className="main-table">
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>Builder</TableCell>
              <TableCell>Edit Customer Info</TableCell>
              <TableCell>View/Edit</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         {this.props.show.map(intake =>
           <BikeTableRow key={intake.id} history={this.props.history} intake={intake}/>
         )}
         
       
   </TableBody>
        </Table>
      </Paper>
    );
  }
}
const mapStateToProps = reduxStore => ({
  ...reduxStore,
  builder: reduxStore.add.showIntakeReducer,
});
export default connect(mapStateToProps)(BikeTableBase);
