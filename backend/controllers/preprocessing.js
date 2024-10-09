// backend/preprocessing.js
const fs = require('fs');
const csv = require('csv-parser');

function cleanInstagramData() {
    const instagramData = [];
    fs.createReadStream('mysql/InstagramPhotos.csv')
        .pipe(csv())
        .on('data', (row) => {
            // Clean hashtags and metadata
            row.hashtags = row.hashtags.replace(/[^a-zA-Z0-9\s#]/g, '').split(' ');
            instagramData.push(row);
        })
        .on('end', () => {
            console.log('Instagram Data Cleaned:', instagramData);
        });
}

module.exports = { cleanInstagramData };
