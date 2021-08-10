const ShoppingListModel = require('../models/ShoppingListSchema');

exports.addItem = async (request, response) => {
    try {
        const { items, priority } = request.body;

        const data = await ShoppingListModel.create({
            items,
            priority
        });
            
        data.save();

        return response.status(200).json({ message:'An item has been successfully sent.', data: data});
    }
    catch (error) {
        return response.status(400).json({message:'Something went wrong when sending your message.', error: error.message});
    }
};


exports.getAllItems = async (request, response) => {
    try {
        const getAllItems = await ShoppingListModel.find({ deleted: false }).sort({ priority: 1 });

        if (getAllItems.length == 0) {
            return response.status(400).json({ message: 'Your shopping list is empty!' });
        } else {
            return response.status(200).json({ message: 'Following data is: ', data: getAllItems });
        }   
    } catch (error) {
        return response.status(404).json({ message: 'Something went terribly wrong.', error: error.message });
    }
};


exports.editItem = async(request, response) => {
    try {
        const { items, priority, id } = request.body;

        const findItem = await ShoppingListModel.findOne({ _id: id });

        if (findItem === null) {
            return response.status(404).json({message: 'Item could not be matched! Check your data.', data: findItem});
        }

        const editItem = await ShoppingListModel.findByIdAndUpdate(findItem._id, {
            items, 
            priority
        }, { new: true });

        return response.status(200).json({ message: 'Following data has been updated: ', editItem });

    } catch (error) {
        return response.status(404).json({ message: 'Something went terribly wrong.', error: error.message });
    }
};


exports.deleteItem = async(request, response) => {
    try {
        const { id } = request.body;

        const findItem = await ShoppingListModel.findOne({ _id: id });

        if (findItem === null) {
            return response.status(404).send('Item could not be matched! Check your data.');
        }

        const deleteItem = await ShoppingListModel.findByIdAndUpdate(findItem._id, {
            deleted: true
        }, { new: true });

            return response.status(200).json({ message: 'Following item has been deleted: ', deleteItem });

    } catch (error) {
        return response.status(404).json({ message: 'Something went terribly wrong.', error: error.message });
    }
};


exports.checkItem = async(request, response) => {
    try {
        const { id } = request.body;

        const findItem = await ShoppingListModel.findOne({ _id: id });

        if (findItem === null) {
            return response.status(404).send('Item could not be matched! Check your data.');
        }

        const deleteItem = await ShoppingListModel.findByIdAndUpdate(findItem._id, {
            checked: !findItem.checked
        }, { new: true });

            return response.status(200).json({ message: 'Following item has been deleted: ', deleteItem });

    } catch (error) {
        return response.status(404).json({ message: 'Something went terribly wrong.', error: error.message });
    }
};