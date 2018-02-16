import gql from 'graphql-tag';

const editUserQuery = gql`
  mutation updateUser($id: ID!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export default editUserQuery;
