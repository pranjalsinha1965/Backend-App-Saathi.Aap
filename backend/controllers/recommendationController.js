// backend/controllers/recommendationController.js
// const db = require('../config/db');

// async function getRecommendations(user_id, destination) {
//     const [user] = await db.query('SELECT * FROM Users WHERE user_id = ?', [user_id]);
//     const [trips] = await db.query('SELECT * FROM Trips WHERE destination = ?', [destination]);
//     const [photos] = await db.query('SELECT * FROM InstagramPhotos WHERE user_id = ?', [user_id]);

//     let recommendations = [];
 
//     if (user.vibe === 'Adventure') {
//         recommendations.push('Hike the local mountains.');
//     } else if (user.vibe === 'Relaxation') {
//         recommendations.push('Relax at a beach resort.');
//     }

//     photos.forEach(photo => {
//         if (photo.location_tag === destination) {
//             recommendations.push(`Instagram Popular Spot: ${photo.photo_url}`);
//         }
//     });

//     return recommendations;
// }

// module.exports = { getRecommendations };

const db = require('../config/db');

// Function to get recommendations based on user data (without destination filter)
async function getUserRecommendations(user_id) {
    try {
        // Fetch user details
        const [userResult] = await db.query('SELECT * FROM Users WHERE user_id = ?', [user_id]);
        if (userResult.length === 0) {
            throw new Error('User not found');
        }
        const user = userResult[0];

        // Fetch user's trips
        const [trips] = await db.query('SELECT * FROM Trips WHERE user_id = ?', [user_id]);

        // Fetch Instagram photos for the user
        const [photos] = await db.query('SELECT * FROM InstagramPhotos WHERE user_id = ?', [user_id]);

        let recommendations = [];

        // Add recommendations based on user's vibe
        if (user.vibe === 'Adventure') {
            recommendations.push('Explore nearby mountains for hiking and trekking.');
        } else if (user.vibe === 'Relaxation') {
            recommendations.push('Relax at a local spa or beach resort.');
        } else if (user.vibe === 'Socializing') {
            recommendations.push('Attend social events or network with new people.');
        } else if (user.vibe === 'Exploration') {
            recommendations.push('Explore the cultural heritage and local attractions.');
        }

        // Add recommendations based on user's trips
        trips.forEach(trip => {
            recommendations.push(`Visit again to: ${trip.destination}`);
        });

        // Add recommendations from Instagram photos
        photos.forEach(photo => {
            recommendations.push(`Instagram Spot: ${photo.location_tag} - ${photo.photo_url}`);
        });

        return recommendations;
    } catch (error) {
        throw error;
    }
}

module.exports = { getUserRecommendations };
