
var bb8 = require('../connection/bb8Connection');

function getAllStudents(req, res, next) {
  bb8.db.any('SELECT * FROM students')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL student details'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleStudent(req, res, next) {
  var studentID = String(req.params.id);
  bb8.db.one('SELECT * FROM students WHERE students.\"studentName\"  = $1', studentID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE student details'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function addStudent(req, res, next) {
  req.body.isobsolete = Boolean(req.body.isobsolete);
  bb8.db.one('SELECT upsertstudent(${code}, ${name}, ${dob}, ${isobsolete})',
  //db.none('INSERT INTO public.students(\"studentCode\", \"studentName\", \"DOB\", \"isObsolete\")'+
  //'values(${id}, ${name}, ${dob}, ${isobsolete})',
    req.body)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Inserted one student'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function removeStudent(req, res, next) {
  var studentID = String(req.params.id);
  bb8.db.result('delete from students where students.\"studentCode\"= $1', studentID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} student`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllStudents: getAllStudents,
  getSingleStudent: getSingleStudent,
  addStudent: addStudent,
  removeStudent: removeStudent
};
