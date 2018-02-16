import gql from 'graphql-tag';

const allUsersQuery = gql`
  query allUsers {
    allUsers {
      id
      name
      email
    }
  }
`;

export default allUsersQuery;
