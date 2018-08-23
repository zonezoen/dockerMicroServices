import consul
from flask import Flask, render_template, request
import socket
import requests
import json
import random

app = Flask(__name__)


# @app.route('/upload', methods=['POST', 'GET'])
# def upload():
#     if request.method == 'POST':
#         print(request.form['name'])
#         return render_template('index.html', name="POST you post ")
#     elif request.method == 'GET':
#         # else:
#         return render_template('index.html', name="GET you post ")
print("1111")
# while True:
#     print("写业务逻辑")
#     print("遇到问题")
#     print("Google 一下")
#     print("理解一下，噢！！！原来是这样实现的。get ！！")
#     print("下一个问题")

@app.route('/')
@app.route('/index')
def index():
    c = consul.Consul(host='consulserver')

    # poll a key for updates

    print("===========")
    # print(c.agent.services())
    print(c.catalog.service("service-web-py"))
    (index, data) = c.catalog.service("service-web-py")
    print(len(data))
    size = len(data)
    hostIndex = random.randint(0, size - 1)
    host = str(data[hostIndex]["ServiceAddress"]) + ":" + str(data[hostIndex]["ServicePort"])
    print()
    print("===========" + host)
    r = requests.get('http://' + host)

    return r.text + "\n" + str(c.agent.checks()) + "\n" + str(c.session.list())


if __name__ == '__main__':
    print("zone")
    app.run(host='0.0.0.0', debug=True)

