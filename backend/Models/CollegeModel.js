const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number:{type:Number , default:null, required:false},
    address:{type:String, default:null, required:false},
    pincode:{type:Number, default:null, required:false},
    role:{type:String, default:null, required:false},
    details:{type:String, default:null, required:false},
    reqSkills:{type:String, default:null, required:false},
    
  },

  
  {
    timestamps: true,
  }
);
module.exports = College = mongoose.model('college', collegeSchema)
// export default User;
