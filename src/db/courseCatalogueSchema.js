var mongoose = require("mongoose");

var courseCatalogueSchema = new mongoose.Schema({
    courseID: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

var Course = module.exports = mongoose.model("course", courseCatalogueSchema);
module.exports.getCourses = function(cb, limit) {
    Course.find(cb).limit(limit);
};
