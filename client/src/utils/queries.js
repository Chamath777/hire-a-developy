import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      inquiry {
        _id
        inquiryText
        createdAt
      }
    }
  }
`;

export const QUERY_INQUIRIES = gql`
  query getInquiry {
    inquiry {
      _id
      inquiryText
      inquiryAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_INQUIRY = gql`
  query getSingleInquiry($inquiryId: ID!) {
    inquiry(inquiryId: $inquiryId) {
      _id
      inquiryText
      inquiryAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      inquiry {
        _id
        inquiryText
        inquiryAuthor
        createdAt
      }
    }
  }
`;
