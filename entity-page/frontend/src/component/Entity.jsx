import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import "./entity.css"
export const Entity = () => {
    const [Name, setName] = useState([])
    const [sort, setSort] = useState("")
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        axios
        .get(`http://localhost:5000/drugs?sort=${sort}`)
        .then(res => {
            console.log(res.data)
                setName(res.data.entity)
            })
            // `http://localhost:5000/drugs?sort=${sort}&page=${page}`
    }, [sort,page])
console.log(Name)
  return (
    <div className='zod' >
        <h1>Drugs</h1>
                 <button onClick={()=>{setSort("Prices")}}>Sort by price</button>
                 <select name="" id="">
                        <option value="">By  Drug Name</option>
                        <option value="">Company Name</option>
                 </select>
        

             <div className='maindiv1'>
             {Name.map((item)=>{
                return (
                <div className='drugdiv'>
                    <img src={item.Image} alt="" />
                    <p>{item.drug}</p>
                    <p>{item.Prices}</p>
                    <p>{item.Expiry}</p>
                    
                    <p>{item.Company_Name}</p>

                </div>)
                
            })}</div> 
        
      <button >Next</button>
      <button>Prev</button>
    </div>
  )
}
// 
// 
// 
