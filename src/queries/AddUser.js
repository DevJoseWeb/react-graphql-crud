import gql from 'graphql-tag';

const addUserQuery = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      name
      email
    }
  }
`;

export default addUserQuery;
