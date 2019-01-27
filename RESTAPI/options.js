var promise = require('bluebird');
const { require } = require("./teachers");
var options = {
  // Initialization Options
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connectionString = "postgres://postgres:postgres@127.0.0.1:5432/bb8";
var dbTeachers = pgp(connectionString);
exports.dbTeachers = dbTeachers;