from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np
import json
from flask_cors import CORS

# Flask app
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
 
with open("trained_model.pkl", "rb") as f:
    model = pickle.load(f)
with open("encoding_maps.json", "r") as f:
    encoding_maps = json.load(f)

    brand_encoding = encoding_maps["brand"]
    model_encoding = encoding_maps["model"]
    transmission_encoding = encoding_maps["transmission"]
    color_encoding = encoding_maps["color"]
    bodyType_encoding = encoding_maps["body_type"]
    posterType_encoding = encoding_maps["poster_type"]
    fuelType_encoding = encoding_maps["fuel_type"]
    location_encoding = encoding_maps["location"]

@app.route("/")
def hello():
    return "Hello, server is runninggggg!"

@app.route("/predict-price", methods=["POST"])
def predict_price():
    
    data = request.get_json()

    data["brand"] = brand_encoding[data["brand"]]
    data["model"] = model_encoding[data["model"]]
    data["transmission"] = transmission_encoding[data["transmission"]]
    data["color"] = color_encoding[data["color"]]
    data["body_type"] = bodyType_encoding[data["body_type"]]
    data["poster_type"] = posterType_encoding[data["poster_type"]]
    data["fuel_type"] = fuelType_encoding[data["fuel_type"]]
    data["location"] = location_encoding[data["location"]]

    data["retail"] = float(data["retail"])
    data["age_of_car"] = float(data["age_of_car"])
    data["mileage_in_km"] = float(data["mileage_in_km"])

    data_df = pd.DataFrame(data, index=[0])
    predicted_price = model.predict(data_df) 
    result = np.exp(predicted_price)
    response = jsonify({"price": result[0]})
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type")
    response.headers.add("Access-Control-Allow-Methods", "OPTIONS,POST")

    return response 

if __name__ == "__main__":
    app.run(debug=True)