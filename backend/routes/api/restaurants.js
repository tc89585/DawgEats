const express = require('express');
const router = express.Router();

const Restaurant = require('../../models/restaurant');
const User = require('../../models/user');

router.get('/', async (request, response) => {
    const restaurants = await Restaurant.find({});
    response.json(restaurants);
});

router.get('/user/:userId', (req, res) => {
    User.findById(req.params.userId)
	.then((item) => res.json(item.restaurants))
	.catch((err) => res.status(404).json({noitemfound: 'No user found'}));
});

router.post('/create-restaurant', (req, res) => {
    Restaurant.create(req.body)
	.then((item) => res.json({msg: 'added sucessfully'}))
	.catch((err) => res.status(404).json({error: 'unable to add'}));
});

router.put('/edit-restaurant/:id', (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body)
	.then((item) => res.json({msg: 'updated sucessfully'}))
	.catch((err) => res.status(404).json({error: 'unable to update'}));
});

router.delete('/delete-restaurant/:id',  (req, res) => {
    Restaurant.findByIdAndRemove(req.params.id, req.body)
	.then((item) => res.json({msg: 'deleted sucessfully'}))
	.catch((err) => res.status(404).json({error: 'unable to delete'}));
});


module.exports = router;
