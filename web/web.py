from flask import Flask
app = Flask(__name__)

@app.route('/')
def handle_index():
    return 'nothing to see here'

if __name__ == '__main__':
    app.run()
