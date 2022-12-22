from flask import Blueprint
from controllers import weather_controllers

routes = Blueprint("routes", __name__, static_folder="static", template_folder="templates")


routes.add_url_rule('/', "get_weather", weather_controllers.get_weather)