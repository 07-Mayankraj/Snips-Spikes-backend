const mongoose =require("mongoose");

const appointmentSchema=mongoose.Schema({
    userid:String,
    serviceid:String,
    date:String,
    time:String,
    service_name:String,
    service_des:String,
    stylerid:String,
    styler_name:{ type: String,default:"Jishnu"}
})

const Appointmentmodel=mongoose.model('appointment',appointmentSchema);

module.exports={
    Appointmentmodel
}