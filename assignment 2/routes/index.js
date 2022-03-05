// assignment 2, Sumi Lee, 301088176, 2022-03-05

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
//section 005
const idInput = document.getElementsByClassName("input-box_login")[0];
const passwordInput = document.getElementsByClassName("input-box_password")[0];
const inputBtn = document.getElementsByClassName('btnon')[0];

function onBtn () {
  const id = idInput.Value;
  const password = passwordInput.value;

  if (id && password) {
    inputBtn.classList.remove('off-button');
  } else {
    inputBtn.classList.add('off-button');
  }
  };
  idInput.addEventListener("keyup", onBtn);
  passwordInput.addEventListener("keyup", onBtn);





module.exports = router;
