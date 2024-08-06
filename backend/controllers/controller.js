let resmodel=require("../model/result")
let add=async(req,res)=>{
    try {
        let data=new resmodel(req.body)
        await data.save()
        res.json({"msg":"record added"})
    } catch (error) {
        res.json({"msg":"error in adding record"})
    }
}

let getdata=async(req,res)=>{
    try {
        let data=await resmodel.find({})
        res.json(data)
    } catch (error) {
        
    }
}

let getres=async(req,res)=>{
    try {
        let data=await resmodel.findById({"_id":req.params.hno})
        res.json(data)
    } catch (error) {
        
    }
}
let del=async(req,res)=>{
    try {
        await resmodel.findByIdAndDelete({"_id":req.params.hno})
        res.json({"msg":"deleted"})
    } catch (err) {
        
    }
}
module.exports={add,getdata,getres,del}
