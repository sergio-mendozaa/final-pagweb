# This file was created to run the application on heroku using gunicorn.
# Read more about it here: https://devcenter.heroku.com/articles/python-gunicorn

from app import app as application

if __name__ == "__main__":
    application.run()
from flask import Flask
app = Flask(__name__)
application = app # our hosting requires application in passenger_wsgi

@app.route(“/”)
def hello():
return This is Hello World!\