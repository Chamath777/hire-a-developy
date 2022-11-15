const mongoose = require("mongoose");

mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts',
=======
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/programming-thoughts",
>>>>>>> c387dc921ff411b44708db346f9ddcbfca4b4f79
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
