//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./userServices_types');
//HELPER FUNCTIONS AND STRUCTURES

var UserService_registUser_args = function(args) {
  this.username = null;
  this.password = null;
  this.sex = null;
  this.age = null;
  if (args) {
    if (args.username !== undefined && args.username !== null) {
      this.username = args.username;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
    if (args.sex !== undefined && args.sex !== null) {
      this.sex = args.sex;
    }
    if (args.age !== undefined && args.age !== null) {
      this.age = args.age;
    }
  }
};
UserService_registUser_args.prototype = {};
UserService_registUser_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.username = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.sex = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.age = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_registUser_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_registUser_args');
  if (this.username !== null && this.username !== undefined) {
    output.writeFieldBegin('username', Thrift.Type.STRING, 1);
    output.writeString(this.username);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 2);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  if (this.sex !== null && this.sex !== undefined) {
    output.writeFieldBegin('sex', Thrift.Type.STRING, 3);
    output.writeString(this.sex);
    output.writeFieldEnd();
  }
  if (this.age !== null && this.age !== undefined) {
    output.writeFieldBegin('age', Thrift.Type.STRING, 4);
    output.writeString(this.age);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserService_registUser_result = function(args) {
};
UserService_registUser_result.prototype = {};
UserService_registUser_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_registUser_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_registUser_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserService_login_args = function(args) {
  this.username = null;
  this.password = null;
  if (args) {
    if (args.username !== undefined && args.username !== null) {
      this.username = args.username;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
  }
};
UserService_login_args.prototype = {};
UserService_login_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.username = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_login_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_login_args');
  if (this.username !== null && this.username !== undefined) {
    output.writeFieldBegin('username', Thrift.Type.STRING, 1);
    output.writeString(this.username);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 2);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserService_login_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.User(args.success);
    }
  }
};
UserService_login_result.prototype = {};
UserService_login_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.User();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_login_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_login_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserService_logout_args = function(args) {
  this.username = null;
  if (args) {
    if (args.username !== undefined && args.username !== null) {
      this.username = args.username;
    }
  }
};
UserService_logout_args.prototype = {};
UserService_logout_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.username = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_logout_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_logout_args');
  if (this.username !== null && this.username !== undefined) {
    output.writeFieldBegin('username', Thrift.Type.STRING, 1);
    output.writeString(this.username);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserService_logout_result = function(args) {
};
UserService_logout_result.prototype = {};
UserService_logout_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_logout_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_logout_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
UserServiceClient.prototype = {};
UserServiceClient.prototype.seqid = function() { return this._seqid; };
UserServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
UserServiceClient.prototype.registUser = function(username, password, sex, age, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_registUser(username, password, sex, age);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_registUser(username, password, sex, age);
  }
};

UserServiceClient.prototype.send_registUser = function(username, password, sex, age) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('registUser', Thrift.MessageType.CALL, this.seqid());
  var params = {
    username: username,
    password: password,
    sex: sex,
    age: age
  };
  var args = new UserService_registUser_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_registUser = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_registUser_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};
UserServiceClient.prototype.login = function(username, password, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_login(username, password);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_login(username, password);
  }
};

UserServiceClient.prototype.send_login = function(username, password) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('login', Thrift.MessageType.CALL, this.seqid());
  var params = {
    username: username,
    password: password
  };
  var args = new UserService_login_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_login = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_login_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('login failed: unknown result');
};
UserServiceClient.prototype.logout = function(username, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_logout(username);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_logout(username);
  }
};

UserServiceClient.prototype.send_logout = function(username) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('logout', Thrift.MessageType.CALL, this.seqid());
  var params = {
    username: username
  };
  var args = new UserService_logout_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_logout = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_logout_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};
var UserServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
UserServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
UserServiceProcessor.prototype.process_registUser = function(seqid, input, output) {
  var args = new UserService_registUser_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.registUser.length === 4) {
    Q.fcall(this._handler.registUser.bind(this._handler), args.username, args.password, args.sex, args.age)
      .then(function(result) {
        var result_obj = new UserService_registUser_result({success: result});
        output.writeMessageBegin("registUser", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("registUser", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.registUser(args.username, args.password, args.sex, args.age, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new UserService_registUser_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("registUser", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("registUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
UserServiceProcessor.prototype.process_login = function(seqid, input, output) {
  var args = new UserService_login_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.login.length === 2) {
    Q.fcall(this._handler.login.bind(this._handler), args.username, args.password)
      .then(function(result) {
        var result_obj = new UserService_login_result({success: result});
        output.writeMessageBegin("login", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("login", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.login(args.username, args.password, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new UserService_login_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("login", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("login", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
UserServiceProcessor.prototype.process_logout = function(seqid, input, output) {
  var args = new UserService_logout_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.logout.length === 1) {
    Q.fcall(this._handler.logout.bind(this._handler), args.username)
      .then(function(result) {
        var result_obj = new UserService_logout_result({success: result});
        output.writeMessageBegin("logout", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("logout", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.logout(args.username, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new UserService_logout_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("logout", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("logout", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};