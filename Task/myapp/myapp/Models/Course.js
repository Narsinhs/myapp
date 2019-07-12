const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    CourseID: [[mongoose.type.ObjectID]],
    Coursename: String,
    Department: [{type:mongoose.type.ObjectID,ref:'Department' }],
    Faculty:[{type:mongoose.type.ObjectID,ref:'Faculty' }]
  });
exports.Course = mongoose.model('Course', CourseSchema);