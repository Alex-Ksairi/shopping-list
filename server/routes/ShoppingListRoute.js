const express = require('express');
const router = express.Router();
const Controller = require('../controller/ShoppingListController');

router.post('/add-item', Controller.addItem);
router.get('/get-list', Controller.getAllItems);
router.put('/edit-item', Controller.editItem);
router.put('/delete-item', Controller.deleteItem);

router.put('/check-item', Controller.checkItem);


module.exports = router;