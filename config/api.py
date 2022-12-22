from dotenv import load_dotenv

load_dotenv()

import os

API_KEY = os.getenv("API_KEY")
API_URL = os.getenv("API_URL")
API_UNITS = os.getenv("API_UNITS")