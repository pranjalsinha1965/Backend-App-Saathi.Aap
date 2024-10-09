# Backend-App-Saathi.Aap

This project is an intelligent system that generates personalized travel itineraries based on user preferences, past trips, spending habits, and social data like Instagram photos and reviews. Built using Node.js, MySQL (AWS RDS), and AI/ML, it recommends destinations and plans trips tailored to the user's vibe and interests.

## Features: 

1. **Personalized Itinerary Generation**: The system tailors travel plans based on user-specific data such as previous trips, vibe preferences (e.g., adventure, relaxation), and reviews.

2. **Social Media Integration**: Instagram data (e.g., popular photos and hashtags) is used to provide recommendations and enhance travel suggestions.

3. **Smart Recommendations**: A recommendation engine aligns destinations, activities, and places to visit with user preferences and spending patterns.

4. **Day-wise Itinerary Planning**: The system generates day-wise travel plans, including approximate costs based on the user's typical travel expenses.

### 1. Clone the Repository: 
``` bash 
git clone "https://github.com/pranjalsinha1965/Backend-App-Saathi.Aap.git"
```

### 2. Install Dependencies: 
``` bash 
cd backend
npm install
npm install express
```

### MySQL Database Setup:
1. Set up MySQL locally using MySQL INT Tools or connect via AWS RDS.
2. Use the provided aws-rds-instance.session.sql file and .env configuration to set up the database.

### 4. Docker Setup (Optional): 

``` bash
docker-compose up --build
```
If you encounter port issues, run:

``` bash 
netstat -ano | findstr :PORT
kill -9 <PID>
```
### 5. Run the Application:
To start the development environment:

``` bash 
npm run dev
```

### 6. Access the API:
Once the app is running, you can access the following endpoints:

Itinerary for User 1 in Hawaii: http://localhost:3000/api/users/1/destination/Hawaii
Home Route: http://localhost:3000

# Project Structure:

``` bash 
travel-itinerary-api/(Backend-Saathi.Aap)
├── backend/
│   ├── config/
│   │   └── db.js                   # Database configuration (MySQL)
│   ├── controllers/
│   │   ├── itineraryController.js  # Logic for generating itineraries
│   │   ├── recommendationController.js  # Recommendation engine logic
│   │   └── preprocessing.js        # Handles data preprocessing
│   ├── models/
│   │   └── userModel.js            # Database interaction models
│   ├── routes/
│   │   └── itineraryRoutes.js      # API routes
│── mysql
│   │ ── users.csv                  # User data
│   │ ── trips.csv                  # Trip data
│   │ ── instagramPhotos.csv        # Instagram data
│── app.js                          # Express app configuration
│── server.js                       # Server entry point
├── node_modules/                   # External libraries
├── .env                            # Environment variables
├── package.json                    # NPM dependencies
└── README.md                       # Project documentation
```
## Key Functionality:

**Data Preprocessing** : The system cleans and preprocesses user and Instagram data, handling missing or inconsistent entries.

**User Segmentation** : Uses unsupervised learning techniques (such as clustering) to segment users based on their past behaviors, reviews, and preferences.

**Recommendation Engine** : Suggests destinations, activities, and places to visit based on user data, social context, and previous travel habits.
Itinerary Generation: Generates day-wise travel plans, including activity recommendations and estimated costs, tailored to the user’s spending habits.

**Video Description** : Please click on the below given link to see how my application runs: 
[Travel-App](https://drive.google.com/file/d/1G75CxEO4bD4oBNgTteoCnwFGvhtrkBg9/view?usp=sharing)



### Troubleshooting:
**Port Conflicts** : Ensure no other processes are running on port 3000. Use netstat and kill commands as needed to free up the port.
**Docker Issues** : If encountering errors with Docker containers, follow the Docker commands provided in the setup instructions above.



