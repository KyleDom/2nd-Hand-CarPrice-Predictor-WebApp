from flask import Flask, request, jsonify
import pickle
import pandas as pd

# Flask app
app = Flask(__name__)

preprocessed_data = pd.read_csv("usedcars.csv")

with open("trained_model.pkl", "rb") as f:
    model = pickle.load(f)

# API endpoint for price prediction
@app.route("/predict-price", methods=["POST"])
def predict_price():
    if request.method == "POST":
        try:
            
            user_data = request.get_json()

            attributes = ["brand", "model", "transmission", "color", "body_type", "poster_type", "fuel_type", "location", "retail", "post_age_in_days", "age_of_car", "mileage_in_km"]

        
            for attribute in attributes:
                if attribute not in user_data:
                    raise ValueError(f"Missing input for feature: {attribute}")
                if not isinstance(user_data[attribute], type(preprocessed_data[attribute].iloc[0])):
                    raise ValueError(f"Invalid data type for feature: {attribute}")

            
            user_data_df = pd.DataFrame.from_dict([user_data])
            user_data_df = user_data_df.reindex(columns=attributes)  

        
            predicted_price = model.predict(user_data_df)[0]
            response = {"price": predicted_price}
            return jsonify(response)
        except ValueError as e:
            return jsonify({"message": str(e)}), 400
        except Exception as e:
            return jsonify({"message": "Internal server error"}), 500
    else:
        return jsonify({"message": "Invalid request method"}), 405

if __name__ == "__main__":
    app.run(debug=True)