import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
//import TableBody from "@material-ui/core/TableBody";
import Card from '@material-ui/core/Card';
//import BikeTableRow from "./BikeTableRow";
import "./BuildDash.css";



class BuilderTable extends Component {


  render() {

    return (
      <Card>
      <Paper>
       
        <Table className="main-table">
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>Builder</TableCell>
              <TableCell>file</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
         {this.props.builder.map(build =>
           <BikeTableRow key={build.id} history={this.props.history} build={build} match={this.props.match}/>
         )}
         
       
   </TableBody> */}
        </Table>
      </Paper>
      </Card>
    );
  }
}
const mapStateToProps = reduxStore => ({
  ...reduxStore,
  builder: reduxStore.builder.builderReducer,
});
export default connect(mapStateToProps)(BuilderTable);
