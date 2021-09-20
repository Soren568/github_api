from flask import render_template, redirect, request, session, flash, jsonify
from flask_app import app

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/git-user', methods=['POST'])
def user_info():
    # print(request.form)
    data = {
        **request.form
    }
    return jsonify(data)



