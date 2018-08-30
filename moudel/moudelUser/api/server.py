from moudelUser.python.userServices import UserService
from moudelUser.python.userServices import ttypes

from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol
from thrift.server import TServer


class UserHandler:
    # user = UserService.User

    def __init__(self):
        pass

    def registUser(self, username, password, sex, age):
        print("registUser")

    def login(self, username, password):
        print("login")

    def logout(self, username):
        print("logout")


if __name__ == '__main__':
    # 创建服务端
    handler = UserHandler()
    processor = UserService.Processor(handler)
    # 监听端口
    transport = TSocket.TServerSocket("127.0.0.1", 3000)
    # 选择传输层
    tfactory = TTransport.TBufferedTransportFactory()
    # 选择传输协议
    pfactory = TBinaryProtocol.TBinaryProtocolFactory()
    # 创建服务端
    server = TServer.TSimpleServer(processor, transport, tfactory, pfactory)
    print("Starting thrift server in python...")
    server.serve()
