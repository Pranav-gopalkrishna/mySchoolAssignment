# FUNCTIONS FOR table.assignments

## Data retrieval functions 

### Whole table
``` javascript
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
```

### One record

``` javascript
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
```

## Data addition functions

``` javascript
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
  ```
