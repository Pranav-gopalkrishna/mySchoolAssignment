# FUNCTIONS FOR table.studentsAssignments

## Data retrieval functions

``` javascripts
function getAllStudentsAssignments(req, res, next) {
  bb8.db.any('select * from "studentsAssignments"')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL students assignments'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
```
