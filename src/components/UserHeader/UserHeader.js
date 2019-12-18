import React from 'react';
import { connect } from 'react-redux';
import './UserHeader.css';



const UserHeader = ({ user }) => (
  <div className="userhead_ui">
    <h1 id="welcome">
      Welcome, { user.username }!
    </h1>
    <p>Your ID is: {user.id}</p>

  </div>
);


const mapStateToProps = ({ user }) => ({ user });


export default connect(mapStateToProps)(UserHeader);
