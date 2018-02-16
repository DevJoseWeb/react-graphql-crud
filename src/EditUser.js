import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import editUserQuery from './queries/EditUser';
import UserForm from './UserForm';

class EditUser extends Component {

  state = {
    alert: ''
  }

  handleSubmit = (values) => {
    const { name, email } = values;
    const { user, mutate, alert, close } = this.props;
    mutate({
      variables: {
        id: user.id,
        name,
        email
      }
    })
    .then((res) => {
      alert({
        success: 'The user was edited!'
      });
      close();
    }).catch((error) => {
      this.setState({
        alert: {
          type: 'danger',
          message: error.message
        }
      });
    });
  };

  render() {

    return (
      <UserForm
        modalId="editUserModal"
        title="Edit User"
        handleSubmit={this.handleSubmit}
        user={this.props.user}
        close={this.props.close}
        alert={this.state.alert} />
    );
  }
}

export default graphql(editUserQuery)(EditUser);
