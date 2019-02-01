module.exports = (sequelize, DataTypes) => {
    return sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        //书名
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //简介
        description: DataTypes.STRING,
        //更新时间
        update_time: DataTypes.DATE
    },{
        underscored: true
    })
};
