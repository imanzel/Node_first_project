const makeBlogTable=(sequelize,DataTypes)=>{

    const Blog=sequelize.define("blog",{
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        subtitle:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.TEXT,
            defaultValue:false,
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    });
    return Blog;
};
module.exports=makeBlogTable;