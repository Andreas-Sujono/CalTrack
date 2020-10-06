const mongoose = require('mongoose');
const config = require('./config');

const app = require('./app');

const database = config.database.DATABASE_URI;

// Connect the database
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(con => {
    console.log('DB connection Successfully!');
  });

// Start the server
const port = config.server.PORT;
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

// process.on('unhandledRejection', err => {
//   console.log('UNHANDLED REJECTION!!!  shutting down ...');
//   console.log(err.name, err.message);
//   process.exit(1);
// });
