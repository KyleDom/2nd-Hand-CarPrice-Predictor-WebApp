import pickle
import pandas as pd 
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

df = pd.read_csv("usedcars.csv")
df = df.drop(['Unnamed: 0'],axis=1)

X = df.drop(['price'],axis=1)
y = df['price']

y_log = np.log(y)

X_train, X_test, y_log_train, y_log_test = train_test_split(X, y_log, test_size= 0.30,random_state=4)
X_train.shape,X_test.shape,y_log_train.shape,y_log_test.shape

randomForest = RandomForestRegressor(n_estimators=400,max_features=0.9157035175944501,min_samples_leaf=1,min_samples_split=5,oob_score=True,random_state=4)

randomForest.fit(X_train, y_log_train)

with open("trained_model.pkl", "wb") as f:
    pickle.dump(randomForest, f)