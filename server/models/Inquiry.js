const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const inquirySchema = new Schema({
  inquiryText: {
    type: String,
    required: "Leave your comment here",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  inquiryAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const inquiry = model("inquiry", inquirySchema);

module.exports = Inquiry;
