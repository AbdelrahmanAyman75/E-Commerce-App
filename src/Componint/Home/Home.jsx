import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ChaildP from '../chaildProducts/ChaildP';
import SliderCom from '../SliderCom/SliderCom';
import SliderCategores from '../sliderCategores/SliderCategores';
import { useQuery } from 'react-query';
import useNetwork from '../../Hooks/useNetwork';

 

export default function Home() {

function Featuredproducts(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}
let {isLoading,isError,isFetched,data}= new useQuery('Featuredproducts',Featuredproducts)
  let Network = useNetwork();
// console.log(data?.data.data);
  return (
    <>

<SliderCom></SliderCom>
<SliderCategores></SliderCategores>
    
     {/* loader */}
      {isLoading?
      
    <div className='w-100 h-100 bg-body-secondary position-absolute top-0 bottom-0 end-0 start-0 '>
      <span className="loader d-flex justify-content-center align-items-center w-100 h-50  "></span>
      </div>
    
  :
    <div className='container'>
  <div className='row mt-5 g-2'>
      {data?.data.data.map((Products)=>{
    return <>
    <div className="col-md-3  position-relative " key={Products.id}>
      <ChaildP product ={Products}/>
    
    </div>
      </>
    }
    )}
  </div>
    {Network}
    </div>
  }
 </>
  )
}
