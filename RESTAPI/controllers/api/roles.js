var bb8 = require('../connection/bb8Connection');

//getAllTeachers
function getAllRoles(req, res, next) 
{
  bb8.db.any('select * from roles')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL roles'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



module.exports = {
  getAllRoles:getAllRoles


  
};

