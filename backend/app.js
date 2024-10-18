// backend/app.js
// const express = require('express');
// const itineraryRoutes = require('./routes/itineraryRoutes');

// const app = express();
// app.use(express.json());

// // Route for main endpoint
// app.get('/', (req, res) => {
//     res.send('Welcome to the Travel Itinerary API');
// });

// // Itinerary Routes
// app.use(itineraryRoutes);

// module.exports = app;

const express = require('express');
const recommendationRoutes = require('./routes/recommendationRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');

const app = express();
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Travel Itinerary API');
});

// Itinerary Routes
app.use(itineraryRoutes);

// Recommendation Routes
app.use(recommendationRoutes);

module.exports = app;
