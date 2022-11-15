const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    type: String
    inquiry: [inquiry]!

  }

  type inquiry {
    _id: ID
    inquiryText: String
    inquiryAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    inquiry(username: String): [inquiry]
    inquiryById(inquiryId: ID!): inquiry
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addInquiry(inquiryText: String!): inquiry
    addComment(inquiryId: ID!, commentText: String!): inquiry
    removeInquiry(inquiryId: ID!): inquiry
    removeComment(inquiryId: ID!, commentId: ID!): inquiry
  }
`;

module.exports = typeDefs;
