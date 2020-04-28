const router = require('express').Router();
let User = require('../models/user.model');
var fs = require('fs');
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async(req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const age = req.body.age

  const newUser = new User({username,password,age});

  await newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/StartGame:id').put(async(req,res)=>{
  console.log("update score inside node js")
  console.log(req.params)
  try {
    const user = await User.findOneAndUpdate({username:req.params.id},{$set:{score:req.body.score}}, { new:
    true, runValidators: true })
    console.log(user)
    if (!user) {
    return res.status(404).send()
    }
    res.send(user)
    } catch (e) {
    res.status(400).send(e)
    }
})

router.route('/getScore').get(async(req,res)=>{

  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));

})



module.exports = router;

//to start the file nodemon server.js

