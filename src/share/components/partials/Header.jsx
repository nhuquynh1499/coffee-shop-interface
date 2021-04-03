import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/commons/logo.png";
import iconCart from "../../../assets/images/commons/_i_icon_cart.svg";
import iconSearch from "../../../assets/images/commons/_i_icon_search.svg";

export default function Header() {
  return (
    <div className="header bg-white">
      <div className="container h-100">
        <div className="h-100 pl-20 pr-20 flex-middle">
          <div className="h-100 mr-30">
            <div className="image-full-height">
              <Link to="/">
                <img className="h-100" alt="Vue logo" src={logo} />
              </Link>
            </div>
          </div>
          <div className="nav-bar">
            <div className="menu-small flex-column">
              <div className="icon-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="menu flex-center">
              <ul className="flex-center">
                <li className="active">Home</li>
                <li>Pages</li>
                <li>Services</li>
                <li>Shop</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="actions flex-middle">
              <ul className="flex-middle">
                <li className="mr-20">
                  <img src={iconCart} alt="Icon Cart" />
                </li>
                <li className="mr-20">
                  <img src={iconSearch} alt="Icon Search" />
                </li>
              </ul>
              <Link to="/login">
                <button className="p-10 bg-blue-btn text-white text-uppercase text-bold">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}