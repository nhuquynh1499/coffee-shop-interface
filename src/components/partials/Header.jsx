import React from "react";
import logo from "../../assets/images/commons/logo_full.png";
import iconCart from "../../assets/images/commons/_i_icon_cart.svg";
import iconSearch from "../../assets/images/commons/_i_icon_search.svg";

export default function Header() {
  return (
    <div className="header bg-white">
      <div class="wrapper pl-20 pr-20 flex-middle">
        <div class="logo mr-30">
          <div class="image">
            <img alt="Vue logo" src={logo} />
          </div>
        </div>
        <div class="nav-bar">
          <div class="menu-small flex-column">
            <div class="icon-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="menu flex-center">
            <ul class="flex-center">
              <li class="active">Home</li>
              <li>Pages</li>
              <li>Services</li>
              <li>Shop</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>
          <div class="actions flex-middle">
            <ul class="flex-middle">
              <li class="mr-20">
                <img src={iconCart} alt="Icon Cart" />
              </li>
              <li class="mr-20">
                <img src={iconSearch} alt="Icon Search" />
              </li>
            </ul>
            <button class="p-10 bg-blue-btn text-white text-uppercase text-bold">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
