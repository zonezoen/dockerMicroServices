#!/bin/bash
#docker rm dockermicroservices_gateway-nodejs_1
#docker rmi gatewayjs -f
#docker rm dockermicroservices_web-py_1
#docker rmi webpy -f
docker rm dockermicroservices_consulserver_1
docker rm dockermicroservices_consulserver1_1
docker rm dockermicroservices_consulserver2_1

cd /Users/zone/Desktop/zone/work/dockerMicroServices
docker-compose up --scale web-py=3