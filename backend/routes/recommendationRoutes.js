const express = require('express');
const { getUserRecommendations } = require('../controllers/recommendationController');
const router = express.Router();

// Route to get recommendations based on user data only
router.get('/api/users/:user_id/recommendations', async (req, res) => {
    const { user_id } = req.params;

    try {
        const recommendations = await getUserRecommendations(user_id);
        res.status(200).json({ success: true, recommendations });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
