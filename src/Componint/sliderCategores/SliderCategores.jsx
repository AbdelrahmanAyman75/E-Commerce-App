import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
export default function SliderCategores() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows:false,
        autoplay: true,
      autoplaySpeed: 300,
        
        
      };
const [ListCategory,setlistcategory]=useState()

async function getCategory(){
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setlistcategory(data.data)
}     

useEffect(()=>{

    getCategory()
},[])
  return (
    <>
    <h1 className='fs-3 my-3 ms-3 '>Categories</h1>
    <hr></hr>
   <div className='  '>
     <Slider {...settings} >
    {ListCategory?.map((img,indx)=>{
        return  <div className='g-0' key={indx}>
        <img src={img.image} key={indx} width={250} height={250} alt=" products" dots={true} />
        </div>
    })}
    </Slider>
   </div>
   
    </>
  )
}
