# backend/clustering.py
import pandas as pd
from sklearn.cluster import KMeans

# Load CSV
users = pd.read_csv('mysql/users.csv')

# Feature extraction (vibe, favorite_activities)
X = pd.get_dummies(users[['vibe', 'favorite_activities']], drop_first=True)

# Perform K-Means clustering
kmeans = KMeans(n_clusters=3)
users['cluster'] = kmeans.fit_predict(X)

# Save the results back
# users.to_csv('mysql/users.csv', index=False)
