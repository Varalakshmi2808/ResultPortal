let express=require("express")
let {add,getdata,getres,del}=require("../controllers/controller")
let route=new express.Router()
route.post("/add",add)
route.get("/getdata",getdata)
route.get("/getres/:hno",getres)
route.delete("/del/:hno",del)
module.exports=route