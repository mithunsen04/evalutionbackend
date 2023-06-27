// const mongoose = require('mongoose');
// require('dotenv').config();
// //const mongourl =mongodb+srv://backenddeploy:deploy123@cluster0.a46c6hx.mongodb.net/?retryWrites=true&w=majority
// const connectDB = async () => {
//   try {
//     await mongoose.connect(`mongodb+srv://backendevalution:e123@cluster0.pggbpzy.mongodb.net/?retryWrites=true&w=majority`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB', error);
//   }
// };

// module.exports = connectDB;
// //done cod



const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/dummyinsta")

module.exports={connection};