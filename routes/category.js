const express = require('express');

const { create, categoryById, read, update, remove, list, readProductByCategory } = require('../controllers/category');
const { userById } = require('../controllers/user');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const router = express.Router();

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/categories', list);
router.get('/category/product/:categoryId', readProductByCategory);


router.param('userId', userById);
router.param('categoryId', categoryById);

module.exports = router;