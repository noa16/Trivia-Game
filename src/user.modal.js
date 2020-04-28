  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  password:{
     
    type:Number,
    required:true,
    unique:true,
    trim:true

  },
 age:{
     type:Number,
     required:true
 },
 score:{
   type:Number
 }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
