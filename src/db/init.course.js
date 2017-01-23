var Course = require("./courselog.js");
var mongoose = require("mongoose");
var assert = require("assert");

var newclass = new Course({"courseID" : "MATH440", "department" : "Math"});
console.log(newclass.courseID);
newclass.save(function (err) {
    if (err) return handleError(err);
});


coursedb = [
    { "courseID" : "MATH110", "department" : "Math"},
    { "courseID" : "MATH120", "department" : "Math"},
    { "courseID" : "MATH121", "department" : "Math"},
    { "courseID" : "MATH180", "department" : "Math"},
    { "courseID" : "MATH184", "department" : "Math"},
    { "courseID" : "MECH220", "department" : "Mechanical Engineering"},
    { "courseID" : "MECH221", "department" : "Mechanical Engineering"},
    { "courseID" : "MECH222", "department" : "Mechanical Engineering"},
    { "courseID" : "MECH223", "department" : "Mechanical Engineering"},
    { "courseID" : "MECH224", "department" : "Mechanical Engineering"},
    { "courseID" : "CPSC110", "department" : "Computer Science"},
    { "courseID" : "CPSC121", "department" : "Computer Science"},
    { "courseID" : "CPSC210", "department" : "Computer Science"},
    { "courseID" : "CPSC213", "department" : "Computer Science"},
    { "courseID" : "CPSC221", "department" : "Computer Science"},
    { "courseID" : "ASTR101", "department" : "Astronomy"},
    { "courseID" : "ASTR101", "department" : "Astronomy"},
    { "courseID" : "ASTR102", "department" : "Astronomy"},
    { "courseID" : "ASTR200", "department" : "Astronomy"},
    { "courseID" : "ASTR205", "department" : "Astronomy"},
    { "courseID" : "BIOL111", "department" : "Biology"},
    { "courseID" : "BIOL112", "department" : "Biology"},
    { "courseID" : "BIOL121", "department" : "Biology"},
    { "courseID" : "BIOL140", "department" : "Biology"},
    { "courseID" : "BIOL152", "department" : "Biology"},
    { "courseID" : "BIOC202", "department" : "Biochemistry"},
    { "courseID" : "BIOC203", "department" : "Biochemistry"},
    { "courseID" : "BIOC301", "department" : "Biochemistry"},
    { "courseID" : "BIOC302", "department" : "Biochemistry"},
    { "courseID" : "BIOC303", "department" : "Biochemistry"},
    { "courseID" : "BUSI100", "department" : "Business"},
    { "courseID" : "BUSI101", "department" : "Business"},
    { "courseID" : "BUSI111", "department" : "Business"},
    { "courseID" : "BUSI112", "department" : "Business"},
    { "courseID" : "BUSI121", "department" : "Business"}

];

Course.collection.insertMany(coursedb, function(err, r){
    assert.equal(null, err);
    assert.equal(35, r.insertedCount);
});

console.log(Course.db.host);
console.log(Course.db.port);
console.log(Course.db.name);