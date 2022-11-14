const { AuthenticationError } = require('apollo-server-express');
const { User, Inquiry } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('inquiry');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('inquiry');
    },
    inquiry: async (parent, { username }) => {
      const params = username ? { username } : {};
      return inquiry.find(params).sort({ createdAt: -1 });
    },
    inquiry: async (parent, { inquiryId }) => {
      return inquiry.findOne({ _id: inquiryId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('inquiry');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addinquiry: async (parent, { inquiryText }, context) => {
      if (context.user) {
        const inquiry = await inquiry.create({
          inquiryText,
          inquiryAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { inquiry: inquiry._id } }
        );

        return inquiry;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { inquiryId, commentText }, context) => {
      if (context.user) {
        return inquiry.findOneAndUpdate(
          { _id: inquiryId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeinquiry: async (parent, { inquiryId }, context) => {
      if (context.user) {
        const inquiry = await inquiry.findOneAndDelete({
          _id: inquiryId,
          inquiryAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { inquiry: inquiry._id } }
        );

        return inquiry;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { inquiryId, commentId }, context) => {
      if (context.user) {
        return inquiry.findOneAndUpdate(
          { _id: inquiryId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
