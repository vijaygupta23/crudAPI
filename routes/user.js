const express = require("express");
const router = express.Router();
const User = require('../models/model');

// get All the data which in database
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.send('Error' + err);
  }
});


// Get the data by Id 
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send('Error' + err);
  }
});

// Push the data in database 

router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    tech: req.body.tech
  });

  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
});

  
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.tech=req.body.tech
    const u1=await user.save()
    res.json(user);
  } catch (err) {
    res.send('Error' + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);
  } catch (err) {
    res.send('Error' + err);
  }
});



module.exports = router;

