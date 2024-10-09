// backend/controllers/recommendationController.js
const db = require('../config/db');

async function getRecommendations(user_id, destination) {
    const [user] = await db.query('SELECT * FROM Users WHERE user_id = ?', [user_id]);
    const [trips] = await db.query('SELECT * FROM Trips WHERE destination = ?', [destination]);
    const [photos] = await db.query('SELECT * FROM InstagramPhotos WHERE user_id = ?', [user_id]);

    let recommendations = [];

    if (user.vibe === 'Adventure') {
        recommendations.push('Hike the local mountains.');
    } else if (user.vibe === 'Relaxation') {
        recommendations.push('Relax at a beach resort.');
    }

    photos.forEach(photo => {
        if (photo.location_tag === destination) {
            recommendations.push(`Instagram Popular Spot: ${photo.photo_url}`);
        }
    });

    return recommendations;
}

module.exports = { getRecommendations };
