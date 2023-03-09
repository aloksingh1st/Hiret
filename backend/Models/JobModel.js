const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: false },
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
module.exports = Job = mongoose.model('job', jobSchema)
// export default User;
