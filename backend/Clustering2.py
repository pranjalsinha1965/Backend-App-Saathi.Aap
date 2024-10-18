# To run this application activate virtual environment in a particular folder after that use pip install 
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

# Load CSV files
users = pd.read_csv('mysql/users.csv')
trips = pd.read_csv('mysql/trips.csv')
instagram_photos = pd.read_csv('mysql/InstagramPhotos.csv')

# Preprocessing - Handle missing values and feature extraction
users.fillna('', inplace=True)
trips.fillna('', inplace=True)
instagram_photos.fillna('', inplace=True)

# Feature Engineering - Extract relevant features from users data (e.g., 'vibe', 'favorite_activities')
# For simplicity, we'll one-hot encode 'vibe' and 'favorite_activities'
users['vibe'] = users['vibe'].astype(str)
users['favorite_activities'] = users['favorite_activities'].astype(str)

# One-hot encoding categorical features
user_features = pd.get_dummies(users[['vibe', 'favorite_activities']], drop_first=True)

# Feature scaling
scaler = StandardScaler()
scaled_features = scaler.fit_transform(user_features)

# KMeans clustering (3 clusters for simplicity, can be adjusted)
kmeans = KMeans(n_clusters=3, random_state=42)
users['cluster'] = kmeans.fit_predict(scaled_features)

# Save the clustered users back to CSV
users.to_csv('mysql/clustered_users.csv', index=False)

# Output result
print(users[['user_id', 'name', 'vibe', 'favorite_activities', 'cluster']])
