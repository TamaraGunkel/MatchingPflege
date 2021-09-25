from flask import Flask
from flask import request
# https://www.tutorialspoint.com/python_text_processing/python_text_translation.htm
import gensim
from gensim.models import KeyedVectors
import json


from chatterbot import ChatBot
chatbot = ChatBot("WhoCares")
from chatterbot.trainers import ListTrainer

conversation = [
    "Hallo",
    "Willkommen auf unserer Plattform!",
    "How are you doing?",
    "I'm doing great.",
    "That is good to hear",
    "Thank you.",
    "You're welcome."
]

trainer = ListTrainer(chatbot)

trainer.train(conversation)



app = Flask(__name__)
#Loading models
model_ger = KeyedVectors.load_word2vec_format('model_ger.bin', binary=True)




def match_intent(usertext):
    for word in usertext.split():
        print(word)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/chatterbot")
def chatbot_response():
    message = request.args.get('userText')
    print(chatbot.get_response(message).confidence)
    print(str(chatbot.get_response(message)))
    return "test"

@app.route("/similarWord")
def generate_response():
    word = request.args.get('word')
    return json.dumps(model_ger.wv.most_similar(word, topn = 10))


