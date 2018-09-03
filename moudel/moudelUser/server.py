import sys, os
import sys

print(sys.path)
import glob

# sys.path.append('moudelUser')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
print(BASE_DIR)
sys.path.append(BASE_DIR)
from python.userServices import UserService
from python.userServices import ttypes

from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol
from thrift.server import TServer
from pymongo import MongoClient


class UserHandler:
    # user = UserService.User
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017/')
        self.zfdb = self.client.zfdb
        self.zfdb.authenticate("", "")
        self.user = self.zfdb.user

    def registUser(self, username, password, sex, age):
        self.user.insert({
            "username": username,
            "password": password,
            "sex": sex,
            "age": age
        })
        print("registUser")
        return "regist success"

    def login(self, username, password):
        print("login")
        user = UserService.User("username", "password", "sex", "age")
        return user

    def logout(self, username):
        print("logout")


# if __name__ == '__main__':
# 创建服务端
handler = UserHandler()
processor = UserService.Processor(handler)
# 监听端口
# transport = TSocket.TServerSocket("127.0.0.1", 5000)
# transport = TSocket.TServerSocket("localhost", 5000)
transport = TSocket.TServerSocket("0.0.0.0", 5000)
# 选择传输层
tfactory = TTransport.TBufferedTransportFactory()
# 选择传输协议
pfactory = TBinaryProtocol.TBinaryProtocolFactory()
# 创建服务端
server = TServer.TSimpleServer(processor, transport, tfactory, pfactory)
print("Starting thrift server in python...")
server.serve()
