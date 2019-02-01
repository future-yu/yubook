module.exports = function (sequelize,DataTypes) {
    return sequelize.define('catalog',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        rank:DataTypes.INTEGER
    },{
        underscored: true
    });
};
