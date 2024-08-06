import React, { useState } from 'react'
import axios from 'axios'

const Result = () => {
    let [hno,setHno]=useState()
    let [data,setData]=useState({})
    let [err,setErr]=useState("")
    let getres=()=>{
        axios.get(`http://localhost:5000/getres/${hno}`).then((res)=>{
            if(res.data)
                {setData(res.data)
                    setErr("")
            }
            else{
                setErr("check Hno")
                setData({})
            }
        })
    }
    let fun=(e)=>{
        setHno(e.target.value)
    }
  return (<div className='result'>
    {err!==""&&<div>{err}</div>}
      <input type="text" onChange={fun}/>
      <button onClick={getres}>GetResult</button>
      {data._id!==undefined&&
        <div className='res'>
        <table>
      <tr>
      <th>Name</th>
      <td>{data.name}</td>
      </tr>
      <tr>
      <th>Phno</th>
      <td>{data.phno}</td>
      </tr>
      <tr>
      <th>Gender</th>
      <td>{data.gen}</td>
      </tr>
      <tr>
      <th>Subject1</th>
      <td>{data.sub1}</td>
      </tr>
      <tr>
      <th>Subject2</th>
      <td>{data.sub2}</td>
      </tr>
      <tr>
      <th>Subject3</th>
      <td>{data.sub3}</td>
      </tr>
      <tr>
      <th>Subject4</th>
      <td>{data.sub4}</td>
      </tr>
      </table>
      </div>}
    
    </div>
  )
}

export default Result
