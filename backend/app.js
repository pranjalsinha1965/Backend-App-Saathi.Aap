// backend/app.js
const express = require('express');
const itineraryRoutes = require('./routes/itineraryRoutes');

const app = express();
app.use(express.json());

// Route for main endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Travel Itinerary API');
});

// Itinerary Routes
app.use(itineraryRoutes);

module.exports = app;
