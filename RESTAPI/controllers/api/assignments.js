
var bb8 = require('../connection/bb8Connection');

function getAllAssignments(req, res, next) {
  //bb8.db.any('select  "assignmentName", assignments."subjectID", assignments."teacherID", "assignmentDate","draftSubmissionDate", "finalSubmissionDate", "assignmentsStudentCount","assignmentsReceived", "assignmentsAccepted", "isClosed", "remarks"')
  bb8.db.any('SELECT "assignmentID", "assignmentName", public.assignments."subjectID", "subjectName",'+ 
  '"subjectDescription", public.assignments."teacherID", "assignmentDate", "draftSubmissionDate",'+
  '"finalSubmissionDate", "assignmentsStudentCount", "assignmentsReceived", "assignmentsAccepted", "isClosed", "remarks"'+
  'FROM public.assignments LEFT JOIN public.subjects ON assignments."subjectID" = subjects."subjectID"')
  .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL assignments'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleAssignment(req, res, next){
  var assignmentID = parseInt(req.params.id);
  //bb8.db.any('select  "assignmentName", assignments."subjectID", assignments."teacherID", "assignmentDate","draftSubmissionDate", "finalSubmissionDate", "assignmentsStudentCount","assignmentsReceived", "assignmentsAccepted", "isClosed", "remarks"')
  bb8.db.one('SELECT "assignmentID", "assignmentName", public.assignments."subjectID", "subjectName",'+ 
  '"subjectDescription", public.assignments."teacherID", "teacherName", "assignmentDate", "draftSubmissionDate",'+
  '"finalSubmissionDate", "assignmentsStudentCount", "assignmentsReceived", "assignmentsAccepted", "isClosed", "remarks"'+
  'FROM public.assignments LEFT JOIN public.subjects ON assignments."subjectID" = subjects."subjectID" LEFT JOIN '+
  'teachers ON teachers."teacherID" = assignments."teacherID" WHERE "assignmentID" = $1', assignmentID)
  //bb8.db.any('select  * from assignments where "assignmentID"=$1', assignmentID)
  .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE assignment'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//function addAssignment(req, res, next) {
  /*req.body.isclosed = Boolean(req.body.isclosed);
  req.body.subjectid = parseInt(req.body.subjectid);
  req.body.teacherid = parseInt(req.body.teacherid);
  req.body.assignmentsstudentcount = parseInt(req.body.assignmentsstudentcount);
  req.body.assignmentsreceived = parseInt(req.body.assignmentsreceived);
  req.body.assignmentsaccepted = parseInt(req.body.assignmentsaccepted);
  req.body.assignmentdate = Date(req.body.assignmentdate);
  req.body.draftsubmissiondate = Date(req.body.draftsubmissiondate);
  req.body.finalsubmissiondate = Date(req.body.finalsubmissiondate);*/
  //bb8.db.one('SELECT upsertsubject(${subjectname}, ${subjectdescription}, ${groupid}, ${isobsolete}, ${teacherid})',
  function addAssignment(req, res, next) {
    req.body.isclosed = Boolean(req.body.isclosed);
    req.body.groupid = parseInt(req.body.groupid);
    req.body.teacherid = parseInt(req.body.teacherid);
    //bb8.db.one('SELECT upsertsubject(${subjectname}, ${subjectdescription}, ${groupid}, ${isobsolete}, ${teacherid})',
    bb8.db.one('SELECT upsertassignment(${assignmentname}, ${subjectid}, ${teacherid}, ${assignmentdate}, ${draftsubmissiondate}, ${finalsubmissiondate}, ${teacherid}, ${teacherid}, ${teacherid}, ${teacherid})',  
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
  getAllAssignments: getAllAssignments,
  getSingleAssignment:getSingleAssignment,
  addAssignment:addAssignment
};