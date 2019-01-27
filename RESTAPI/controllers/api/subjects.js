var bb8 = require('../connection/bb8Connection');

//getAllTeachers
function getAllSubjects(req, res, next) 
{
  bb8.db.any('select * from "subjects"')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL subjects'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addSubject(req, res, next) {
  req.body.isobsolete = Boolean(req.body.isobsolete);
  req.body.groupid = parseInt(req.body.groupid);
  req.body.teacherid = parseInt(req.body.teacherid);
  //bb8.db.one('SELECT upsertsubject(${subjectname}, ${subjectdescription}, ${groupid}, ${isobsolete}, ${teacherid})',
  bb8.db.one('SELECT upsertsubject(${subjectname}, ${subjectdescription}, ${groupid}, ${isobsolete}, ${teacherid})',  
  req.body)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Inserted one subject'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllSubjects:getAllSubjects,
  addSubject:addSubject
};

