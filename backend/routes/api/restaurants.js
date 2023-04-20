const express = require('express');
const router = express.Router();

const Restaurant = require('../../models/restaurant');

router.get('/', async (request, response) => {
  const restaurants = await Restaurant.find({});
  response.json(restaurants);
});

/*TODO*/
router.get('/:userId', () => {});
router.post('/create-restaurant', () => {});
router.patch('/edit-restaurant', () => {});
router.delete('/delete-restaurant');

module.exports = router;
