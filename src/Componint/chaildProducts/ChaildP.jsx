/* eslint-disable no-undef */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bounce, Flip, toast } from "react-toastify";
import { CartContext } from "../../Context/CartContext";
import { CWashListContext } from "../../Context/CartwashContext/CartwashContext";



function ChaildP({ product }) {

 
  let { addtocartwashList } = useContext(CWashListContext);
  let { setnumOfCartItems } = useContext(CartContext);
  const [changewashlist, setChangewashlist] = useState(false)
  function changeColor() {
    setChangewashlist((prev => !prev))
  }
  async function addproducttocart(productId) {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { productId },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );

    toast.success(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });


    // eslint-disable-next-line eqeqeq
    if (data.status == "success") {
      setnumOfCartItems(data.numOfCartItems);

    }
    // console.log(data.numOfCartItems);
  }

  async function Addwishlist(id) {
    let req = await addtocartwashList(id)
    console.log(req);
    toast.success(req.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  return (
    <>
      <div className="product overflow-hidden  px-2 cursor-pointer ">
        <Link to={"/ProductDetails/" + product.id} className="a">
          <img src={product.imageCover} width={250} alt="product" className="" />
          <h3 className="text-main fs-4">{product.category.name}</h3>
          <p> {product.title.split("").join("")} </p>
          <hr></hr>
          <p className="d-flex justify-content-between">
            <span>{product.price} Egp</span>
            <span>
              <i className="fas fa-star rating-color me-1"></i>
              <span>{product.ratingsAverage}</span>
            </span>
          </p>
        </Link>
        <div className=" product-show  ">
          <div className="items">
            <i className="fa-solid fa-cart-plus fa-2x border-0 cart " onClick={() => addproducttocart(product.id)}></i>
            <i className="fa-solid fa-heart btn fa-2x  border-0 " onClick={changeColor} style={{ color: changewashlist ? "red" : "" }}></i>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default ChaildP;
