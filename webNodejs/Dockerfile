#基于 node 镜像
FROM node
#指定维护者信息
MAINTAINER zone 842221695@qq.com

#WORKDIR /usr/local
#新建路径
#RUN mkdir testgit
#WORKDIR testgit
#将 github 中的项目 clone 到本地
#RUN git clone https://github.com/zonezoen/test.git
#上面这一段代码已经注释掉，就不会被调用


#指定下一条命令的运行目录
WORKDIR /usr/local
#新建路径
RUN mkdir work
#在 /usr/local 的基础上指定运行目录，所以当前目录为：/usr/local/work
WORKDIR work
#安装必要的组件
#安装必要的组件
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm config set registry http://registry.npm.taobao.org/

RUN cnpm install supervisor -g
#将当前目录下的文件，复制到 /usr/local/work/ 下
COPY . /usr/local/work/

RUN cnpm install

CMD supervisor app.js
#暴露容器 3000 端口
EXPOSE 3000


