from flask import request, json, jsonify
import urllib.request
from config import api


def get_weather():
    
    #get params
    args = request.args.to_dict()
    #check if city was not sent
    if 'city' not in args.keys():
        #prepare dict with error and message
        response = {"error" : "No valid city",
        "message": "Please send a valid city param"}
        
        #return jsonified reponse with status bad request
        return jsonify(response), 400

    #if city param was sent
    #make api call to open weather
    data = get_data_from_open_weather(args['city']).read()

    #read the data and format into json
    response = json.loads(data)

    #reutrn response with status ok
    return response, 200


def get_data_from_open_weather(city):
    #format query string
    url = f"{api.API_URL}&appid={api.API_KEY}&units={api.API_UNITS}&q={city}"
    
    #get response from open weather api
    response = urllib.request.urlopen(url)

    return response
