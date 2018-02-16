import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import allUsersQuery from './queries/AllUsers.js';
import deleteUserQuery from './queries/DeleteUser.js';

class UsersListItem extends Component {

  deleteUser = (e) => {
    const { mutate, user, alert } = this.props;
    mutate({
      variables: {
        id: user.id,
      },
      refetchQueries: [ { query: allUsersQuery }]
    })
    .then((res) => {
      alert({
        success: 'The user was deleted!'
      });
    }).catch((error) => {
      alert({
        danger: error.message
      });
    });
  }

  editUser = () => {
    this.props.editUser(this.props.user);
  }

  render() {
    const user = this.props.user;
    return (
      <tr>
        <td><button onClick={this.editUser} className="btn btn-primary">Edit</button></td>
        <td><button onClick={this.deleteUser} className="btn btn-danger">X</button></td>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  }
}

export default graphql(deleteUserQuery)(UsersListItem);
