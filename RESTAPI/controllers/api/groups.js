var bb8 = require('../connection/bb8Connection');

//getAllTeachers
function getAllGroups(req, res, next) 
{
  bb8.db.any('select * from groups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL groups'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



module.exports = {
  getAllGroups:getAllGroups


  
};

