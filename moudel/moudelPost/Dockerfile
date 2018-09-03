#基于 node 镜像
FROM node
#指定维护者信息
MAINTAINER zone 842221695@qq.com
#指定下一条命令的运行目录
WORKDIR /usr/local
#新建路径
RUN mkdir work
WORKDIR work

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm config set registry http://registry.npm.taobao.org/
RUN cnpm install supervisor -g

COPY . /usr/local/work
RUN cnpm install
EXPOSE 3000
CMD supervisor server.js
