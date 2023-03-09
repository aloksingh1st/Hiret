const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number:{type:Number , default:null, required:false},
    address:{type:String, default:null, required:false},
    dob:{type:Date, default:null, required:false},
    location:{type:String, default:null, required:false},
    pincode:{type:Number, default:null, required:false},
    profileSummary:{type:String, default:null, required:false},
    workExperience:{type:String, default:null, required:false},
    qualifications:{type:String, default:null, required:false},
    specializations:{type:String, default:null, required:false},
    institution:{type:String, default:null, required:false},
    grades:{type:Number, default:null, required:false},
    boardName:{type:String, default:null, required:false},
    yearOfPassing:{type:Date, default:null, required:false},
    keySkills:{type:String, default:null, required:false},
    resume:{type:String, default:null, required:false},
    language:{type:String, default:null, required:false},
    
    
  },

  
  {
    timestamps: true,
  }
);
module.exports = User = mongoose.model('user', userSchema)
// export default User;
