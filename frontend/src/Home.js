import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    let [data,setData]=useState([])
    let [f,setF]=useState(true)
    useEffect(()=>{
        axios.get("http://localhost:5000/getdata").then((res)=>{
            setData(res.data)
        })
    },[f])
    let del=(hno)=>{
      axios.delete(`http://localhost:5000/del/${hno}`).then((res)=>{
        console.log(res.data)
        setF((f)=>!f)
      })
    }
  return (
    <div className='tab'>
      <table border={1}>
      <tr>
      <th>Hno</th>
      <th>Name</th>
      <th>phno</th>
      <th>gender</th>
      <th>sub1</th>
      <th>sub2</th>
      <th>sub3</th>
      <th>sub4</th>
      </tr>
      {
        data.map((item)=>{
            return(<tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.phno}</td>
                <td>{item.gen}</td>
                <td>{item.sub1}</td>
                <td>{item.sub2}</td>
                <td>{item.sub3}</td>
                <td>{item.sub4}</td>
                <td><button onClick={()=>del(item._id)}>Delete</button></td>
                </tr>)
        })
      }
      </table>
    </div>
  )
}

export default Home

