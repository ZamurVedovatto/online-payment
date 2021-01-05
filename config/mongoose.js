const mongoose = require ('mongoose');

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.vazzu.mongodb.net/online_payment?retryWrites=true&w=majority', 
  { useUnifiedTopology: true }
);

module.exports = {mongoose}