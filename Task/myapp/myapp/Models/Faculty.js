const mongoose = require('mongoose');
const FacultySchema = new mongoose.Schema({
    FacultyID: mongoose.type.ObjectID,
    Name: String,
    Phone: String,
    Address: Date,
    Courses:[{type:mongoose.type.ObjectID,ref:'Course' }]
  });
exports.Faculty = mongoose.model('Faculty', FacultySchema);