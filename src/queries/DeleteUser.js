import gql from 'graphql-tag';

const deleteUserQuery = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export default deleteUserQuery;
