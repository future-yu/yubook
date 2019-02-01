module.exports = function (sequelize, DataTypes) {
    return sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        //书名
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //简介
        description: DataTypes.STRING,
        //更新时间
        update_time: DataTypes.DATE,
        //所属类别
        category_id: DataTypes.STRING,
        //字数
        word_num: DataTypes.INTEGER,
        //评分
        score: DataTypes.FLOAT,
        //状态(连载或完结)
        status: DataTypes.INTEGER,
        //总阅读量
        total_read_num: DataTypes.INTEGER,
        //付费阅读量
        pay_read_num: DataTypes.INTEGER,
    }, {
        underscored: true
    });
};
