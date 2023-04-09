const mongoose = require('mongoose')
mongoose.pluralize(null) // to avoid creating collection name in lower case and with 's'
// to enable using .env variable
require('dotenv').config();
mongoose.set('strictQuery', true);  

// mongoose.connect('mongodb://jagannaik:Jagan@2124@localhost:27017/test', {
//   authSource: 'admin',
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(()=>{
//     console.log("connected to MongoDB successfully:");
// }).catch((e)=>{
//     console.log("error whil attempting to connect to mongoDB");
//     console.log(e);
// });


//mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

module.exports = {
    mongoose
};