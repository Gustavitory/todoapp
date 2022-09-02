const {DataTypes}=require("sequelize");


module.exports=(sequelize)=>{
    sequelize.define('task',{
        // id:{type:DataTypes.UUID,primaryKey:true,allowNull:false},
        name:{type:DataTypes.STRING,defaultValue:'(Nameless task)'},
        description:{type:DataTypes.STRING,defaultValue:'()'},
        // date:{type:DataTypes.DATE, allowNull:false},
        status:{type:DataTypes.ENUM({values:['Pending','In progress','Success','Canceled','Expired']}),
            defaultValue:'Pending',allowNull:false}
    })
}