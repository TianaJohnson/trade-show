import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';


const UserPage = ({ user }) => (
  <div>
    <h1 id="welcome">
      Welcome, { user.username }!
    </h1>
    <p>Your ID is: {user.id}</p>
    <LogOutButton className="log-in" />
  </div>
);


const mapStateToProps = ({ user }) => ({ user });


export default connect(mapStateToProps)(UserPage);
