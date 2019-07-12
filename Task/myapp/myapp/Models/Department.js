var mongoose = require('mongoose');
var DepartmentSchema = new mongoose.Schema({
    DepartmentID:  mongoose.Schema.Types.ObjectId,
    Name: String
    
  });
module.exports = DepartmentSchema;