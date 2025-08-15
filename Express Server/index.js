const express = require('express');
const mongoose = require('mongoose');
const Cart = require('./Model/cartSchema');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/shopingCart')
.then(() => console.log("database connection successfull"));

//home page
app.get('/', (req, res) => {
    res.send('<h1>You are navigating the Home Page</h1>');
});

//Show items
app.get('/show-cart', async (req, res) => {
    const data = await Cart.find();
    res.send(data);
});

//Search item
app.get('/find-item/:id', async (req, res) => {
    const item = await Cart.find({_id: req.params.id});
    res.send(item);
});

//Add items
app.post('/add-item',async (req, res) => {
    const itemData = new Cart(req.body);
    await itemData.save();
    res.send(itemData);
});


//Update items
app.put('/update-item/:id', async (req, res) => {
    const updatedItem = await Cart.findByIdAndUpdate(req.params.id, {
        itemName: req.body.itemName,
        categroy: req.body.category,
        description: req.body.description,
        price: req.body.price
    }, {new: true});
    res.json(updatedItem);
});

//Delete Items
app.delete('/remove-item/:id', async (req, res)=>{
    await Cart.findByIdAndDelete(req.params.id);
    res.send("Item deleted succesfully");
});

app.listen(8080, () => console.log('app is listing on post http://localhost:8080'));