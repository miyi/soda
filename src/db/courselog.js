var mongoose = require("mongoose");

var courseCatalogueSchema = new mongoose.Schema({
    courseID: String,
    department: String
});

var Course = mongoose.model("course", courseCatalogueSchema);

module.exports = Course;
