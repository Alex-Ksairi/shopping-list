const mongoose = require('mongoose');

const ShoppingListSchema = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    items: { type: String, required: true },
    priority: { type: Number, min: [1, 'must be more than 1'],
    max: [6, 'must be less than 6' ], default: 1, required: true},
    deleted: { type: Boolean, default: false },
    checked: { type: Boolean, default: false }
});

const ShoppingListModel = mongoose.model('shopping-list', ShoppingListSchema);

module.exports = ShoppingListModel;