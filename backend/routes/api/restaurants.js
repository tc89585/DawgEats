const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

const {Restaurant} = require('../../models/restaurant');
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

router.get('/restaurant/:id', (req, res) => {
    Restaurant.findById(req.params.id)
	.then((item) => res.json(item))
	.catch((err) => res.status(404).json({noitemfound: 'No restaurant found'}));
});

router.post('/create-restaurant/:userId', async (req, res) => {
    const restaurant =  await Restaurant.create(req.body);
	
		User.findByIdAndUpdate({_id: req.params.userId}, {$push: {restaurants : restaurant}})
		.then((item) => res.json({msg: 'added sucessfully'}))
		.catch((err) => res.status(404).json({error: 'unable to add'}))
	});

	router.put('/edit-restaurant/:id/:userId', async (req, res) => {
		const {
			id,
			userId
		  } = req.params

		  

		await Restaurant.findByIdAndUpdate(id, req.body);

	 const user = await User.findOneAndUpdate( {"_id" :userId, "restaurants._id": id }, {$set:  {
           "restaurants.$.name": req.body.name,
		   "restaurants.$.address": req.body.address,
		   "restaurants.$.number": req.body.number,
		   "restaurants.$.cuisine": req.body.cuisine,
		   "restaurants.$.description": req.body.description,
		   "restaurants.$.imageUrl": req.body.imageUrl,
        }}, {
			new : false,
			overwrite : true,
			runValidators: true
		  })
		.then((item) => res.json({msg: 'updated sucessfully'}))
		.catch((err) => res.status(404).json({error: 'unable to update'}));
	});

	router.delete('/delete-restaurant/:id/:userId',  async (req, res) => {

		const {
			id,
			userId
		  } = req.params

		await Restaurant.findByIdAndRemove(id, req.body);
		 User.findByIdAndUpdate(userId, {'$pull': { 'restaurants':{'_id':  new ObjectId(id)} }})
		.then((item) => res.json({msg: 'deleted sucessfully'}))
		.catch((err) => res.status(404).json({error: 'unable to delete'}));
	});


	module.exports = router;
