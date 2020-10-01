from flask import Flask,render_template,request
from stories import story
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "secret"

debug = DebugToolbarExtension(app)


@app.route("/")
def askquestion():
    questions = story.prompts
    return render_template("question.html",questions=questions)


@app.route("/story")
def showstory():
    content = story.generate(request.args)
    return render_template("story.html",content=content)

    
