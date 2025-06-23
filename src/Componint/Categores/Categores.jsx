import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Categores() {
  const [isloding ,setisloding] =useState({})
  const [Category ,setCategory] =useState({})
  
   async function getAllCategory(){
    setisloding(true)
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      console.log(data);
      setCategory(data)
      setisloding(false)
    }

useEffect(()=>{
  getAllCategory()
},[])




  return (
    <>
    {isloding? <div className='d-flex justify-content-center align-items-center my-5 py-5'>
    <i className='fas fa-spin fa-spinner fa-2x'></i>
  </div>:
  <div className='container'>
     <div className="row g-2">
   {Category?.data?.map((el, indx) => (
     <div className="col " key={indx}>
       <div className=' p-4 '>
         <img src={el.image} height={300} width={300} className='' alt={el.name} />
         <p className='text-center fw-bold my-3 text-main '>{el.name}</p>
       </div>
     </div>
   ))}
 </div>
  </div>
  }
      
    </>
  )
}
