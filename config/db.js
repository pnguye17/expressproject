const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/bankingapp';

// const connectionString = process.env.mongodURI || "mongodb+srv://admin:Pn0242862@cluster0-fz3qb.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

mongoose.connection.on('connected', () => {
  console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
  console.log('mongoose error ', error);
});