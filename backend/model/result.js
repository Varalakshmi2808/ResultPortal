let mongoose=require("mongoose")
let resch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "phno":Number,
    "gen":String,
    "sub1":Number,
    "sub2":Number,
    "sub3":Number,
    "sub4":Number,

})
let resmodel=new mongoose.model("result",resch)
module.exports=resmodel