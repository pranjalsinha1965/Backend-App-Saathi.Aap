// backend/controllers/itineraryController.js
const { getRecommendations } = require('./recommendationController');

async function generateItinerary(req, res) {
    const { user_id, destination } = req.params;

    try {
        const recommendations = await getRecommendations(user_id, destination);

        const itinerary = recommendations.map((activity, index) => ({
            day: index + 1,
            activity: activity,
            cost: calculateCost(activity),
        }));

        res.status(200).json({ success: true, itinerary });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error generating itinerary' });
    }
}

function calculateCost(activity) {
    if (activity.includes('Hike')) return 100;
    if (activity.includes('Relax')) return 50;
    return 75;
}

module.exports = { generateItinerary };
