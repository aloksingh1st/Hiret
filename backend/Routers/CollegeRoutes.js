const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const utils = require("../utils");

// User model
const College = require("../Models/CollegeModel");
const Job = require("../Models/JobModel");
const newsModel = require("../Models/newsModel");

// Signup route
router.post("/signup", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  College.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "College already exists" });

    const newUser = new College({
      name,
      email,
      password,
    });

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            "somethingwhichisverySecret",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

router.post("/signin", async (req, res) => {
  const user = await College.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        reqSkills: user.reqSkills,
        number: user.number,
        language: user.language,
        token: utils.generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid email or password" });
});


router.get('/search', async (req, res) => {
  const query = req.query.q;

  console.log(req.query.q);

  // {$or:[{region: "NA"},{sector:"Some Sector"}]
  const results = await Job.find({$or :[{ details: { $regex: query, $options: 'i' } }, { role: { $regex: query, $options: 'i' }},{ reqSkills: { $regex: query, $options: 'i' }} ] });
  // console.log(results);
  res.json(results);
});



router.put("/updateProfile/:id", (req, res) => {
  // Find the user by ID
  College.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).json({ message: "Error finding user" });
    } else {
      // Update the user's information
      if (req.body.name) {
        user.name = req.body.name;
      }
      if (req.body.email) {
        user.email = req.body.email;
      }
      if (req.body.number) {
        user.number = req.body.number;
      }
      if (req.body.address) {
        user.address = req.body.address;
      }
      if (req.body.role) {
        user.role = req.body.role;
      }
      if (req.body.location) {
        user.location = req.body.location;
      }
      if (req.body.pincode) {
        user.pincode = req.body.pincode;
      }
      if (req.body.details) {
        user.details = req.body.details;
      }
      if (req.body.reqSkills) {
        user.reqSkills = req.body.reqSkills;
      }

      // Save the user
      user.save((err, user) => {
        if (err) {
          res.status(500).json({ message: "Error saving user" });
        } else {
          res.json({ message: "Profile updated successfully" });
        }
      });
    }
  });
});

router.get("/getusers", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  User.find({}, "-password", (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(users);
    }
  })
    .skip(startIndex)
    .limit(limit);
});

router.post("/createJob", (req, res) => {
  const { name, email, number, address, pincode, role, details, reqSkills } =
    req.body;

    console.log(req.body);      
  const newJob = new Job({
    name,
    number,
    address,
    pincode,
    email,
    details,
    role,
    reqSkills
  });


  newJob.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving form data');
    } else {
      res.send('Form data saved');
    }
  });
});


router.get('/getjobs', (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;


  Job.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(users);
    }
  }).skip(startIndex)
  .limit(limit);
});


router.get("/news", (req, res)=>{
  

  newsModel.findOne({}, (err, news) =>{
    if(err){
      res.status(500).send(err);
    }
    else{
      res.status(200).json(news);
    }
  })
});

module.exports = router;
