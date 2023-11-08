const { Model,  DataTypes} = require("sequelize")
const sequelize = require("../config/connection")

class Comments extends Model {}

Comments.init(
 {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true,
    },

 },
 {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comments',
 }
);

module.exports = Comments   

// post_id:{
    //     type: DataTypes.INTEGER,
    //     references:{
    //       model: 'post',
    //       key: 'id'
    //     }
    // },
    // user_id:{
    //     type: DataTypes.INTEGER,
    //     references:{
    //         model: 'user',
    //         key: 'id'
    //     }
    // }