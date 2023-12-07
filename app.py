from flask import Flask, render_template

app = Flask(__name__, static_folder='web_flask/static', template_folder='web_flask/templates')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)




