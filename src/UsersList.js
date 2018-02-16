import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import allUsersQuery from './queries/AllUsers.js'
import UsersListItem from './UsersListItem.js'

class UsersList extends Component {
  render() {
    const {loading, error, allUsers} = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>${error}</div>;
    }
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Edit</th>
            <th>Exclude</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          { allUsers.map(user => <UsersListItem
            key={user.id}
            user={user}
            editUser={this.props.editUser}
            alert={this.props.alert} />) }
        </tbody>
      </table>
    );
  }
}

export default graphql(allUsersQuery)(UsersList);
