var express = require('express');
var router = express.Router();
const { createUser, getUserById, getUser } = require('../controllers/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', createUser)
router.get('/all', getUser)
router.get('/:id', getUserById)

module.exports = router;
