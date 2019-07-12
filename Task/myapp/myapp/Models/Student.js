const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    StudentID: mongoose.Schema.type.ObjectID,
    Name: String,
    Phone: String,
    Address: Date,
    Semester: String,
    Department: [{type:mongoose.Schema.type.ObjectID,ref:'Department' }],
    Courses:[{type:mongoose.Schema.type.ObjectID,ref:'Course' }]
  });
exports.Student = mongoose.model('Student', StudentSchema);