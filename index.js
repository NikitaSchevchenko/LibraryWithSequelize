require("dotenv").config();

const db = require("./src/database/models/index.js");

const dbCheckConnection = async () => {
  try {
    console.log(`Connecting to db ${process.env.DB_NAME}`);
    await db.sequelize.authenticate();
    console.log("Connection is sucessful");
  } catch (err) {
    console.log(`Unable to connect with db ${process.env.DB_NAME}`);
    console.log(err);
  }
};

const dropGenreTable = async () => {
  try {
    console.log(`Trying to drop table Genres from ${process.env.DB_NAME}`);
    await db.Genre.drop();
    console.log("Table Genres is sucessfully dropped");
  } catch (err) {
    console.log(`Unable to drop table Genres`);
    console.log(err);
  }
};


const syncGenreTable = async () => {
  try {
    console.log(`Trying to sync table Genres from ${process.env.DB_NAME}`);
    await db.Genre.sync();
    console.log("Table Genres is sucessfully synced");
  } catch (err) {
    console.log(`Unable to sync table Genres`);
    console.log(err);
  }
};

// dbCheckConnection();
// dropGenreTable();
// syncGenreTable();