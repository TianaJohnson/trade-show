import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BikeTable.css';


class BikeTableRow extends Component {
    render() {
        return (
            <TableRow>
            <TableCell>{this.props.client.customers_full_name}</TableCell>
            <TableCell>{this.props.client.phone_number}</TableCell>
            <TableCell> <Button variant="contained"
                size="small"
                onClick={this.editCust}
                color="primary"
                style={{ margin: 10 }}>
                Edit
            </Button></TableCell>
            <TableCell><Button variant="contained"
                    color="secondary"
                    onClick={this.custFile}
                    style={{ margin: 10 }}>
                    Customer File
            </Button></TableCell>
            <TableCell> 
                <Button variant="contained"
                    color="inherit"
                    onClick={this.archiveCust}
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