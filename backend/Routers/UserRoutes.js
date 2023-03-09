const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const utils = require("../utils");

// User model
const User = require('../Models/userModel');

// Signup route
router.post('/signup', (req, res) => {

  console.log(req.body);
  const { name, email, password } = req.body;

  // Simple validation
  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if(user) return res.status(400).json({ msg: 'User already exists' });

    const newUser = new User({
      name,
      email,
      password
    });

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            "somethingwhichisverySecret",
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          )
        });
      });
    });
  });
});


router.post(
  "/signin",
  async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          number : user.number,
          language: user.language,
          token: utils.generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })


  router.put('/updateProfile/:id', (req, res) => {
    // Find the user by ID
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.status(500).json({ message: 'Error finding user' });
      } else {
        // Update the user's information
        if(req.body.name){
          user.name = req.body.name;
        }
        if(req.body.email){
          user.email = req.body.email;
        };
        if(req.body.number){
          user.number = req.body.number;
        }
        if(req.body.address){
          user.address = req.body.address;
        }
        if(req.body.dob){
          user.dob = req.body.dob;
        }
        if(req.body.location){
          user.location = req.body.location;
        }  
        if(req.body.pincode){
          user.pincode = req.body.pincode;
        }  
        if(req.body.profileSummary){
          user.profileSummary = req.body.profileSummary;
        }      
        if(req.body.workExperience){
          user.workExperience = req.body.workExperience;
        } 
        if(req.body.qualifications){
          user.qualifications = req.body.qualifications;
        }  
        if(req.body.specializations){
          user.specializations = req.body.specializations;
        }   
        
        if(req.body.institution){
          user.institution = req.body.institution;
        }

        if(req.body.grades){
          user.grades = req.body.grades;
        }

        if(req.body.boardName){
          user.boardName = req.body.boardName;
        }

        if(req.body.yearOfPassing){
          user.yearOfPassing = req.body.yearOfPassing;
        }

        if(req.body.keySkills){
          user.keySkills = req.body.keySkills;
        }
        if(req.body.resume){
          user.resume = req.body.resume;
        }

        if(req.body.language){
          user.language = req.body.language;
        }


        // Save the user
        user.save((err, user) => {
          if (err) {
            res.status(500).json({ message: 'Error saving user' });
          } else {
            res.json({ message: 'Profile updated successfully' });
          }
        });
      }
    });
  });


  router.get('/getusers', (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;


    User.find({}, '-password', (err, users) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(users);
      }
    }).skip(startIndex)
    .limit(limit);
  });

  router.get('/find/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });






  router.get('/search', async (req, res) => {
    const query = req.query.q;
  
    console.log(req.query.q);

    const results = await User.find({$or :[{ qualifications: { $regex: query, $options: 'i' } }, { profileSummary: { $regex: query, $options: 'i' }},{ keySkills: { $regex: query, $options: 'i' }}] });
    console.log(results);
    res.json(results);
  });


module.exports = router;
