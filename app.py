from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', flask_token="This is a flask token")

@app.route('/hello')
def hello():
    return "Hi there"

