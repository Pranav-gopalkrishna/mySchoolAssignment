var bb8 = require('../connection/bb8Connection');

//getAllTeachers
function getAllTeachers(req, res, next) {
  //db.any('select * from teachers')
  bb8.db.any('SELECT "teacherID","title","teacherName",teachers."roleID",'+
  '"roleName","roleDescription",teachers."isObsolete", teachers."lastUpdate" FROM teachers '+
  'LEFT JOIN roles ON teachers."roleID" = roles."roleID"')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL teachers'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleTeacher(req, res, next) {
  var teacherName = String(req.params.teacherID);
  bb8.db.one('SELECT "teacherID","title","teacherName",teachers."roleID","roleName","roleDescription",teachers."isObsolete", teachers."lastUpdate" FROM teachers LEFT JOIN roles ON teachers."roleID" = roles."roleID" WHERE teachers."teacherName"  = $1', teacherName)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE teacher details'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeTeacher(req, res, next) {
  var teacherName = String(req.params.name);
  bb8.db.result('delete from teachers where teachers.\"teacherName\" = $1', teacherName)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} teacher`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

function addTeacher(req, res, next) {
  req.body.isobsolete = Boolean(req.body.isobsolete);
  bb8.db.one('SELECT upsertteacher(${name}, ${title}, ${isobsolete}, ${roleid})',
    req.body)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Inserted one teacher'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllTeachers:getAllTeachers,
  getSingleTeacher:getSingleTeacher,
  addTeacher:addTeacher,
  removeTeacher:removeTeacher
};

