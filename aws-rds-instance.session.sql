-- Create the database itinerarydb2
-- CREATE DATABASE IF NOT EXISTS itinerarydb2;

-- -- Use the newly created database
-- USE itinerarydb2;

-- Create the Users table
-- CREATE TABLE Users (
--     user_id INT PRIMARY KEY,
--     name VARCHAR(100),
--     email VARCHAR(100),
--     vibe VARCHAR(50),
--     favorite_activities TEXT)

-- Create the Trips table
-- CREATE TABLE Trips (
--     trip_id INT PRIMARY KEY,
--     user_id INT,
--     destination VARCHAR(100),
--     start_date DATE,
--     end_date DATE,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id)  -- Correct foreign key reference
-- );


-- Create the InstagramPhotos table
-- CREATE TABLE InstagramPhotos (
--     photo_id INT PRIMARY KEY AUTO_INCREMENT,
--     user_id INT,
--     photo_url VARCHAR(255),
--     location_tag VARCHAR(100),
--     hashtags TEXT,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id)
-- );

-- Inserting multiple rows into the Trips table
-- INSERT INTO Trips (trip_id, user_id, destination, start_date, end_date)
-- VALUES
-- (102, 3, 'Hawaii', '2023-08-01', '2023-08-07'),
-- (103, 4, 'Tokyo', '2023-10-01', '2023-10-10');  -- Ensure user_id 1 exists in Users


-- select * from Users;

-- Inserting multiple rows into the Trips table
-- INSERT INTO Trips (trip_id, user_id, destination, start_date, end_date)
-- VALUES
-- (102, 2, 'Hawaii', '2023-08-01', '2023-08-07'),
-- (103, 3, 'Las Vegas', '2023-09-10', '2023-09-15'),
-- (104, 4, 'New York', '2023-10-01', '2023-10-05');

-- select * from Trips;

-- Inserting multiple rows into the InstagramPhotos table
-- INSERT INTO InstagramPhotos (user_id, photo_url, location_tag, hashtags)
-- VALUES
-- (2, 'https://instagram.com/photo2', 'Hawaii', '#beach #relax #sunset'),
-- (3, 'https://instagram.com/photo3', 'Las Vegas', '#party #fun #vacation'),
-- (4, 'https://instagram.com/photo4', 'New York', '#city #explore #adventure');

-- INSERT INTO Users (user_id, name, email, vibe, favorite_activities) VALUES 
-- (6, 'Frank', 'frank@example.com', 'Adventure', 'Rock Climbing, Kayaking'), 
-- (7, 'Grace', 'grace@example.com', 'Relaxation', 'Yoga, Meditation'), 
-- (8, 'Hank', 'hank@example.com', 'Nature', 'Camping, Bird Watching'), 
-- (9, 'Ivy', 'ivy@example.com', 'Culture', 'Museum Visits, Theater'), 
-- (10, 'Jack', 'jack@example.com', 'Socializing', 'Bar Hopping, Events');

-- select * from InstagramPhotos;
-- select * from Trips;
-- select * from Users;

-- ALTER USER 'admin'@'%' IDENTIFIED BY 'aBcD1234!';
-- GRANT ALL PRIVILEGES ON itinerarydb2.* TO 'admin'@'%';
-- FLUSH PRIVILEGES;

-- SELECT * FROM Users WHERE user_id = 2  ;-- Replace 1 with the actual user ID you are testing
