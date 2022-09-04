const {DataTypes,Sequelize}=require("sequelize");


module.exports=(sequelize)=>{
    sequelize.define('task',{
        id:{type:DataTypes.UUID,primaryKey:true,allowNull:false,defaultValue:Sequelize.UUIDV4},
        name:{type:DataTypes.STRING,defaultValue:'(Nameless task)'},
        description:{type:DataTypes.STRING,defaultValue:'()'},
        date:{type:DataTypes.DATE, allowNull:true},//ojito con los usos horarios
        status:{type:DataTypes.ENUM({values:['Pending','In progress','Success','Canceled','Expired']}),
            defaultValue:'Pending',allowNull:false}
    })
}