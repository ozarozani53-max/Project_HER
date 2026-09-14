from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/chapter_1")
def chapter_1():
    return render_template("chapter_1.html")

@app.route("/chapter_2")
def chapter_2():
    return render_template("chapter_2.html")

@app.route("/chapter_3")
def chapter_3():
    return render_template("chapter_3.html")

@app.route("/chapter_4")
def chapter_4():
    return render_template("chapter_4.html")

@app.route("/chapter_5")
def chapter_5():
    return render_template("chapter_5.html")

@app.route("/chapter_6")
def chapter_6():
    return render_template("chapter_6.html")

@app.route("/chapter_7")
def chapter_7():
    return render_template("chapter_7.html")

@app.route("/final_letter")
def final_letter():
    return render_template("final_letter.html")

if __name__ == "__main__":
    app.run(debug=True)