#基于 node 镜像
FROM python
#指定维护者信息
MAINTAINER zone 842221695@qq.com

#指定下一条命令的运行目录
WORKDIR /usr/local
#新建路径
RUN mkdir work
#在 /usr/local 的基础上指定运行目录，所以当前目录为：/usr/local/work
WORKDIR work

#将当前目录下的文件，复制到 /usr/local/work/ 下
COPY . /usr/local/work/
RUN pip install -r requirements.txt
CMD python server.py
#暴露容器 5000 端口
EXPOSE 5000


