import gql from 'graphql-tag';

export const allUsersQuery = gql`
  query allUsers {
    allUsers {
      id
      name
      email
    }
  }
`;

export const createUserQuery = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const updateUserQuery = gql`
  mutation updateUser($id: ID!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const deleteUserQuery = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
