const router = require('express').Router();
router.get('/', (req, res) => {
  res.render('homepage');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/logout', (req, res) => {
  res.render('homepage');
});
router.get('/register', (req, res) => {
  res.render('signUp');
})

module.exports = router;
