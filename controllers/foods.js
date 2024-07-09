// controllers/foods.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
  try {
    res.render('foods/index.ejs');
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

// router logic will go here - will be built later on in the lab
// router.get('/', (req, res) => {
//     res.render('foods/index.ejs')
//   });


// router.get('/new', async (req, res) => {
//     res.render('foods/new.ejs');
//   });



// router.post('/', async (req, res) => {
//     try {
//       // Look up the user from req.session
//       const currentUser = await User.findById(req.session.user._id);
//       // Push req.body (the new form data object) to the
//       // foods array of the current user
//       currentUser.foods.push(req.body);
//       // Save changes to the user
//       await currentUser.save();
//       // Redirect back to the applications index view
//       res.redirect(`/users/${currentUser._id}/foods`);
//     } catch (error) {
//       // If any errors, log them and redirect back home
//       console.log(error);
//       res.redirect('/')
//     }
//   });
  


//   router.get('/', async (req, res) => {
//     try {
//       // Look up the user from req.session
//       const currentUser = await User.findById(req.session.user._id);
      
//       // Render index.ejs, passing in all of the current user's pantry items as data in the context object.
//       res.render('foods/index.ejs', {
//         pantry: currentUser.pantry,
//       });
//     } catch (error) {
//       // If any errors, log them and redirect back home
//       console.log(error);
//       res.redirect('/');
//     }
//   });
  
  

module.exports = router;
