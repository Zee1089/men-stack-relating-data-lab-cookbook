// controllers/foods.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// controllers/applications.js

router.get('/', async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    res.render('foods/index.ejs', {
      foods: currentUser.foods,
    });
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error)
    res.redirect('/')
  }
});



router.get('/new', async (req, res) => {
    res.render('foods/new.ejs');
  });



// controllers/foods.js`

router.post('/', async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Push req.body (the new form data object) to the
    // foods array of the current user
    currentUser.foods.push(req.body);
    // Save changes to the user
    await currentUser.save();
    // Redirect back to the foods index view
    res.redirect(`/users/${currentUser._id}/foods`);
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect('/')
  }
});

  
router.get('/:foodId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const food = currentUser.foods.id(req.params.foodId);
    res.render('foods/show.ejs', {
      food: food,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/')
  }
});


module.exports = router;
