/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authcontext } from "../../Context/AuthContext";
import logo from "../../Assets/images/freshcart-logo.svg";
import { CartContext } from "../../Context/CartContext";
import { CWashListContext } from "../../Context/CartwashContext/CartwashContext";
import "./Navbar.css"
export default function Navbar() {
  const { setuserislogin, userislogin } = useContext(authcontext);
  const navigate = useNavigate();
  let { numOfCartItems } = useContext(CartContext);

  let {numOfItems} = useContext(CWashListContext);

  function logOut() {
    setuserislogin(false);
    localStorage.removeItem("token");
    navigate("/Login");
  }

  


  return (
    
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary   ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="Home">
          <img src={logo} alt="freshcart-logo" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userislogin && (
            <ul className="navbar-nav ms-auto  ">
              <li className="nav-item">
                <Link className="nav-link" to="Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Cart">
                  Cart
                </Link>
              </li>
              <Link className="nav-link" to="WashList">
                Washlist
                </Link>
              <li className="nav-item">
                <Link className="nav-link" to="Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Categores">
                  Categores
                </Link>
              </li>
              <li className ="nav-item">
                <Link className ="nav-link" to="Brands">
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="allorders">
                orders
                </Link>
              </li>

              <Link to={"/Cart"}>
              <div className="me-auto w-100">
              <i className="fa-solid fa-cart-shopping text-main mt-2 position-relative   ">
                <span className="position-absolute top-0 end-0 translate-middle-y cursor-pointer  text-dark fs-6  number-count">
                  {numOfCartItems || 0}
                </span>
              </i>
              </div>
              </Link>

            </ul>
          )}

          <div className=" d-flex justify-content-center align-items-center ms-auto ">
            <li className="nav-item ms-auto list-unstyled ">
              <i className="fa-brands mx-2 fa-facebook "></i>
              <i className="fa-brands mx-2 fa-instagram "></i>
              <i className="fa-brands mx-2 fa-linkedin "></i>
              <i className="fa-brands mx-2 fa-twitter "> </i>
            </li>
          </div>

          {userislogin ? (
            <li className="nav-item me-3 list-unstyled ">
              <span onClick={logOut} className="nav-link fw-bold  ">
                <Link to="#" className="list-unstyled nav-link fw-bold ">
                  <i className="fa-solid fa-right-from-bracket mx-2 fa-1x text-mainnav" ></i>
                </Link>
              </span>
            </li>
          ) : (
            ""
          )}
        </div>
        
      </div>
      </nav>
    </>
  );
}
