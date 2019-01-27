
var bb8 = require('../connection/bb8Connection');

function getAllSubjectsCombinations(req, res, next) {
  bb8.db.any('SELECT * FROM "subjectsCombinations"')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL subjects combinations'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllSubjectsCombinations:getAllSubjectsCombinations
};