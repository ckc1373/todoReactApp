const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');
const session = require('express-session')
const mongoose = require('mongoose')

mongoose.connection.on('error', function(){
  console.log('error connecting to the database')
})
mongoose.connection.on('connected', function(){
  console.log('successfully connected to the database')
})
mongoose.connect(process.env.MONGODB_URI)

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
