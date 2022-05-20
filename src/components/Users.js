import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          { this.props.user.map( user => <li>{user.username} - {user.hometown}</li>) }
        </ul>
        <p>User Count: {this.props.userCount}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
