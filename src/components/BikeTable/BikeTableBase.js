import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import "./BikeFile.css";

class BikeTableBase extends Component {
  render() {
    return (
      <Paper>
        <Table className="admin_table">
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>Builder</TableCell>
              <TableCell>Edit Customer Info</TableCell>
              <TableCell>View/Edit</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
         {this.props.reduxStore.addCust.customerReducer.map(client =>
           <AdminRow key={client.id} history={this.props.history} client={client}/>
         )}
         
       
   </TableBody> */}
        </Table>
      </Paper>
    );
  }
}
const mapStateToProps = reduxStore => {
  return { reduxStore: reduxStore };
};
export default connect(mapStateToProps)(BikeTableBase);
