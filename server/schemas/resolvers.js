const { AuthenticationError } = require("apollo-server-express");
const { User, Inquiry } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("Inquiry");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("Inquiry");
    },
    Inquiry: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Inquiry.find(params).sort({ createdAt: -1 });
    },
    InquiryById: async (parent, { InquiryId }) => {
      return Inquiry.findOne({ _id: InquiryId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("Inquiry");
      }
      throw new AuthenticationError("You need to be logged in!");
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
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addInquiry: async (parent, { InquiryText }, context) => {
      if (context.user) {
        const Inquiry = await Inquiry.create({
          InquiryText,
          InquiryAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { Inquiry: Inquiry._id } }
        );

        return Inquiry;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { InquiryId, commentText }, context) => {
      if (context.user) {
        return Inquiry.findOneAndUpdate(
          { _id: InquiryId },
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
      throw new AuthenticationError("You need to be logged in!");
    },
    removeInquiry: async (parent, { InquiryId }, context) => {
      if (context.user) {
        const Inquiry = await Inquiry.findOneAndDelete({
          _id: InquiryId,
          InquiryAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { Inquiry: Inquiry._id } }
        );

        return Inquiry;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { InquiryId, commentId }, context) => {
      if (context.user) {
        return Inquiry.findOneAndUpdate(
          { _id: InquiryId },
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
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
