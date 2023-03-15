from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS
import openai


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}},
     supports_credentials=True,
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])

socketio = SocketIO(app, cors_allowed_origins="*")

openai.api_key = "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"

def chat(prompt, model):
    completions = openai.Completion.create(
        engine=model,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=1,
    )
    message = completions.choices[0].text.strip()
    return message

def inputHistory(data,text, max_len=3):
    userInput = data
    if text == "":
        text = [userInput]
    else:
        text.append(userInput)
        if len(text) > max_len:
            text.pop(0)
    return text

def joinInput(textList: list):
    return "".join(textList)




tmp = []


@socketio.on('message')
def handle_message(data):
    global tmp
    
    print('received message: ' + data)
    socketio.emit('message', data)
    tmp = inputHistory(data,tmp,10)
    print(tmp)
    prompt = joinInput(tmp)
    response = chat(prompt, "text-davinci-003")
    socketio.emit('response', {'message': response})
    print(f"Bot: {response}")


if __name__ == '__main__':
    socketio.run(app,debug=True,port=8585,host="0.0.0.0")
