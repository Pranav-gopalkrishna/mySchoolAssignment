var express = require('express');
var router = express.Router();
//var dbTeachers = require('../teachers');
var db = require('../controllers/connection/bb8Connection');
var dbStudents = require('../controllers/api/students');
var dbTeachers = require('../controllers/api/teachers');
var dbRoles = require('../controllers/api/roles');
var dbSubjectsCombinations = require('../controllers/api/subjectsCombinations');
var dbSubjects = require('../controllers/api/subjects');
var dbGroups = require('../controllers/api/groups');
var dbStudentsAssignments = require('../controllers/api/studentsAssignments');
var dbAssignments = require('../controllers/api/assignments');

router.get('/api/students', dbStudents.getAllStudents);
router.get('/api/students/:id', dbStudents.getSingleStudent);
router.post('/api/students', dbStudents.addStudent);
router.delete('/api/students/:id', dbStudents.removeStudent);

router.get('/api/teachers', dbTeachers.getAllTeachers);
router.get('/api/teachers/:name', dbTeachers.getSingleTeacher);
router.delete('/api/teachers/:name', dbTeachers.removeTeacher);
router.post('/api/teachers', dbTeachers.addTeacher);

router.get('/api/roles', dbRoles.getAllRoles);

router.get('/api/subjectsCombinations', dbSubjectsCombinations.getAllSubjectsCombinations);

router.get('/api/subjects', dbSubjects.getAllSubjects);
router.post('/api/subjects', dbSubjects.addSubject);

router.get('/api/groups', dbGroups.getAllGroups);

router.get('/api/studentsAssignments', dbStudentsAssignments.getAllStudentsAssignments);

router.get('/api/assignments', dbAssignments.getAllAssignments);
router.get('/api/assignments/:id', dbAssignments.getSingleAssignment);
router.post('/api/assignments', dbAssignments.addAssignment);

module.exports = router;
