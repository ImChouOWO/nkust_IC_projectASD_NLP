from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret!"
socketio = SocketIO(app)

@app.route("/")
def index():
    return render_template("index.html")

@socketio.on("message")
def handle_message(msg):
    print("接收到消息：", msg)
    emit("response", {"data": msg}, broadcast=True)

if __name__ == "__main__":
    socketio.run(app)
