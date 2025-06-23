import React from 'react'
import Slider from "react-slick";
import Img1 from "../../Assets/images/slider-image-1.jpeg"
import Img2 from "../../Assets/images/slider-image-2.jpeg"
import Img3 from "../../Assets/images/slider-image-3.jpeg"

export default function SliderCom() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,

  };
  return (
    <>
    <div className='container'>
       <div className="row g-0 ">
        <div className="col-md-9 mt-5">
          <Slider {...settings} >
            <div>
              <img src={Img1} height={400} className='w-100' alt="slider category" />
            </div>
            <div>
              <img src={Img2} height={400} className='w-100' alt="slider category" />

            </div>
            <div>
              <img src={Img3} height={400} className='w-100' alt="slider category" />

            </div>
          </Slider>

        </div>

        <div className="col-md-3">
          <div className='mt-5'>
            <img src={Img2} height={225} className='w-100' alt="banar img" />
            <img src={Img3} height={225} className='w-100' alt="banar img" />
          </div>

        </div>

      </div>
    </div>


    </>
  )
}
