import React, { Component } from 'react';
import CountUsers from './CountUsers';
import AddUser from './AddUser';
import EditUser from './EditUser';
import UsersList from './UsersList';
import Alert from './Alert';

class App extends Component {

  state = {
    addUser: null,
    editUser: null,
    alert: ''
  }

  addUser = () => {
    this.setState({
      addUser: {
        name: '',
        email: ''
      }
    });
  }

  editUser = (user) => {
    this.setState({
      editUser: user
    });
  }

  close = () => {
    this.setState({
      addUser: null,
      editUser: null
    });
  }

  alert = (msg) => {
    this.setState({
      alert: {
        type: Object.keys(msg)[0],
        message: Object.values(msg)[0]
      }
    });
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">React GraphQL CRUD</h1>
        </header>
        <Alert alert={this.state.alert} />
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addUser}>Add User</button>
          <CountUsers />
        </div>
        <UsersList
          editUser={this.editUser}
          alert={this.alert} />
        <AddUser
          user={this.state.addUser}
          close={this.close}
          alert={this.alert} />
        <EditUser
          user={this.state.editUser}
          close={this.close}
          alert={this.alert} />
      </div>
    );
  }
}

export default App;
