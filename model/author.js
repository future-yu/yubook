module.exports = function (sequelize,DataTypes) {
    return sequelize.define('author',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:DataTypes.STRING,
    },{
        underscored: true
    });
};
