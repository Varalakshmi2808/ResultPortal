import React, { useState } from 'react'
import axios from 'axios'

const Add = () => {
    let [status,setStatus]=useState("")
    let [data,setData]=useState({"_id":"","name":"","phno":"","gen":"","sub1":"","sub2":"","sub3":"","sub4":""})
    let add=()=>{
        axios.post("http://localhost:5000/add",data).then((res)=>{
            setStatus(res.data.msg)
            if(res.data.msg!=="error in adding record"){
                setData({"_id":"","name":"","phno":"","gen":"","sub1":"","sub2":"","sub3":"","sub4":""})
            }
        })
    }
    let fun=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
  return (<div>
    <div>{status}</div>
    <div className='form'>
      <div>HNo:<input type="text" value={data._id} name="_id" onChange={fun}/></div><br></br>
      <div>Name:<input type="text" value={data.name} name="name" onChange={fun}/></div><br></br>
      <div>Phno:<input type="text" value={data.phno} name="phno" onChange={fun}/></div><br></br>
      <div>Gender:
      Male<input type="radio" value="male" name="gen" onChange={fun} checked={data.gen=='male'}/>
      Female<input type="radio" value="female" name="gen" onChange={fun} checked={data.gen=='female'}/>
      </div>
      <div>Telugu:<input type="text" value={data.sub1} name="sub1" onChange={fun}/></div><br></br>
      <div>English:<input type="text" value={data.sub2} name="sub2" onChange={fun}/></div><br></br>
      <div>Maths:<input type="text" value={data.sub3} name="sub3" onChange={fun}/></div><br></br>
      <div>Science:<input type="text" value={data.sub4} name="sub4" onChange={fun}/></div><br></br>
      <div><button onClick={add}>Add</button></div>
    </div>
    </div>)
}

export default Add
