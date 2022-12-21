from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('./client/build/index.html')

@app.route('/hello')
def hello():
    return "Hi there"

