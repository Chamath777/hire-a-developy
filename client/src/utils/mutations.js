import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_INQUIRY = gql`
  mutation addInquiry($inquiryText: String!) {
    addInquiry(inquiryText: $inquiryText) {
      _id
      inquiryText
      inquiryAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($inquiryId: ID!, $commentText: String!) {
    addComment(inquiryId: $inquiryId, commentText: $commentText) {
      _id
      inquiryText
      inquiryAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
