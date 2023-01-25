import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.set('strictQuery', false);


var student = new Schema({
  fullname: {
    type: String,
    required: true
  },
  
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required:true
  },  
  
  class:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  }
  
},{timestamps:true});

mongoose.models = {};

const Student = mongoose.model('Student', student);

export default Student;