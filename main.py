from flask import Flask, redirect, session
from db.scripts import do
from db.queries import get_by_id
from utils.settings import settings

app = Flask(__name__)
app.config['SECRET_KEY'] = settings.key

@app.route('/')
def index():
    session['statement_id'] = 1
    return '<h2>index</h2>'

@app.route('/test')
def test():
    data = do(get_by_id, [session['statement_id']])
    session['statement_id'] += 1
    if not data:
        return redirect('/result')
    return data[0][1]

@app.route('/result')
def result():
    session['statement_id'] = 1
    return '<h2>result</h2>'

if __name__ == '__main__':
    app.run(debug=True)