from flask import Flask, render_template

from routes import weather_routes

from flask import render_template, request, redirect, make_response, jsonify
from flask_cors import CORS, cross_origin



app = Flask(__name__)

#weather routes will redirect api requests
app.register_blueprint(weather_routes.routes, url_prefix="/getWeather")

#middleware
cors = CORS(app)

#routing index page of the app
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)

