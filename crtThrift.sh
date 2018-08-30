#!/bin/bash
#thrift -out ../nodejs --gen js:node test.thrift
#thrift -out ../java --gen java test.thrift


cd /Users/zone/Desktop/zone/work/dockerMicroServices/moudel/moudelUser/thrift
thrift -out ../python --gen py userServices.thrift
thrift -out ../../../gateWayJs/moudelUser --gen js:node userServices.thrift


cd /Users/zone/Desktop/zone/work/dockerMicroServices/moudel/moudelPost/thrift
thrift -out ../nodejs --gen js:node postServices.thrift
thrift -out ../../../gateWayJs/moudelPost --gen js:node postServices.thrift