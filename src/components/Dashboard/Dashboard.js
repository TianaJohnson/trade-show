// import React, { Component } from 'react';
// //import { connect } from 'react-redux';
// import UserHeader from '../UserHeader/UserHeader';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import BikeTable from '../BikeTable/BikeTableBase';
// import './Dashboard.css';

// class Dashboard extends Component {

//     addNew = () => {
//         this.props.history.push('/add');
//       }

//     render(){
//         return (
//             <div className="dashboard">
//                 <br/>
//                 <Card className="dash-card">
//                     <UserHeader/>
//                     <br/>
//                     <Button variant="contained" 
//                             color="primary"
//                             onClick={this.addNew}
//                             style={{ margin: 10 }}>
//                     That new new
//                     </Button>
//                     <br/>
//                     <BikeTable/>
//                 </Card>
//                 <br/>
//             </div>
//         )
//     }
// }

// export default Dashboard;
import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
//import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import BikeTableRow from "../BikeTable/BikeTableRow";
//import "./BikeTable.css";



class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
        show: [],
    }
}



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
  show: reduxStore.add.showIntakeReducer,
});
export default connect(mapStateToProps)(Dashboard);