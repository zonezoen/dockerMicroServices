/**
 * Created by zone on 2018/2/10.
 */
const Sequelize = require('sequelize');
const DataTypes = require('sequelize');
var config = {
    MYSQL_DATABASE: ''  // 使用哪个数据库
    , MYSQL_USERNAME: ''  // 用户名
    , MYSQL_PASSWORD: '!'  // 口令
    , MYSQL_HOST: ''  // 主机名
    , MYSQL_PORT:   // 端口号，MySQL默认3306
}


var sequelize = new Sequelize(
    config.MYSQL_DATABASE
    , config.MYSQL_USERNAME
    , config.MYSQL_PASSWORD
    , {
        host: config.MYSQL_HOST,
        port: config.MYSQL_PORT,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        },
        timezone: '+08:00'  //sequelize 存储数据时默认采用UTC时区，比东八区早8小时
    });

sequelize
    .authenticate()
    .then(() => {
        console.log('===============================================');
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('===============================================');
        console.error('Unable to connect to the database:', err);
    });


//以下为：用户 E - R 图
let Post = sequelize.define('user', {//用户表
    id: {type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment: '主键'}
    , title: DataTypes.STRING     //用户ID
    , content: DataTypes.STRING     //用户ID
    , tag: DataTypes.STRING     //用户ID

    // , userId: {type: DataTypes.INTEGER, field: 'userId', allowNull: false, comment: '用户Id'}
}, {
    timestamps: true//该属性将会自动添加createdAt、updatedAt两个字段，分别表示创建和更新时间
    , underscored: true//使用下划线，自动添加的字段会在数据段中使用“蛇型命名”规则，如：createdAt在数据库中的字段名会是created_at
    , paranoid: true//虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deleted_at属性
});

module.exports = new Map([
    ['Post', Post]//用户表

]);