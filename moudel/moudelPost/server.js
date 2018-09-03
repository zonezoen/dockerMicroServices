var thrift = require('thrift');
var PostService = require('./nodejs/PostService');
var ttypes = require('./nodejs/postServices_types');
const Sequelize = require('sequelize');
const DataTypes = require('sequelize');
// const MysqlModel = require('./mysql_connect');
// const Post = MysqlModel.get('Post');

// var connection = thrift.createConnection('127.0.0.1', 5000);
// var connection = thrift.createConnection('localhost', 5000);
class Server {
    async createServer() {
        await this.connectMysql();
        let Post = await this.defModel();

        this.server = await thrift.createServer(PostService, {
            addPost(title, content, tag, callback) {
                console.log("i am server, i got your Post: " + title + "  " + content + "  " + tag);
                let newPost = Post.create({
                    title: title     //用户ID
                    , content: content     //用户ID
                    , tag: tag     //用户ID
                }).then(function (err, res) {
                    if (err) {
                        console.log(err);
                        return
                    }
                    console.log(JSON.stringify(res))
                })


                callback("callback addPost")
            },
            getPost(title, callback) {
                console.log("i am server, i got your title: " + title);
                callback()
            },
            delPost(title, callback) {
                console.log("i am server, i delete your post: " + title);
                callback("callback delPost")

            }

        });
        this.startServer()
    }

    async startServer() {
        this.server.listen(3000);
    }

    async connectMysql() {

        var config = {
            MYSQL_DATABASE: ''  // 使用哪个数据库
            , MYSQL_USERNAME: ''  // 用户名
            , MYSQL_PASSWORD: ''  // 口令
            , MYSQL_HOST: ''  // 主机名
            , MYSQL_PORT:   // 端口号，MySQL默认3306
        }


        this.sequelize = new Sequelize(
            config.MYSQL_DATABASE
            , config.MYSQL_USERNAME
            , config.MYSQL_PASSWORD
            , {
                host: config.MYSQL_HOST,
                port: config.MYSQL_PORT,
                dialect: 'mysql',
                operatorsAliases: false,
                pool: {
                    max: 5,
                    min: 0,
                    idle: 30000
                },
                timezone: '+08:00'  //sequelize 存储数据时默认采用UTC时区，比东八区早8小时
            });

        this.sequelize
            .authenticate()
            .then(() => {
                console.log('===============================================');
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.log('===============================================');
                console.error('Unable to connect to the database:', err);
            });
    }

    async defModel() {
        const DataTypes = require('sequelize');
        let Post = this.sequelize.define('post', {//用户表
            id: {type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment: '主键'}
            , title: DataTypes.STRING     //用户ID
            , content: DataTypes.STRING     //用户ID
            , tag: DataTypes.STRING     //用户ID

            // , userId: {type: DataTypes.INTEGER, field: 'userId', allowNull: false, comment: '用户Id'}
        });
        this.sequelize.sync();
        return Post

    }
}

let server = new Server();
server.createServer();











