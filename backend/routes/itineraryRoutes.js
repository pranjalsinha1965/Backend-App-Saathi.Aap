// backend/routes/itineraryRoutes.js
const express = require('express');
const { generateItinerary } = require('../controllers/itineraryController');
const router = express.Router();

// Route to generate itinerary
router.get('/api/users/:user_id/destination/:destination', generateItinerary);

module.exports = router;
