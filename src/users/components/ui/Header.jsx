import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/commons/logo.png";
import iconCart from "../../../assets/images/commons/_i_icon_cart.svg";
import iconSearch from "../../../assets/images/commons/_i_icon_search.svg";
import avatarUser from '../../../assets/images/commons/icon_user.png';
import { Avatar } from "@material-ui/core";

export default function Header() {
  let { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname);
  const isAuthenticated = localStorage.getItem("token") ? true : false;

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  const toggle = () => {
    setIsActive(pathname);
  };

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
            <div className="menu flex-middle">
              <ul className="flex-center">
                <li><Link to="/" onClick={toggle} className={isActive === "/" ? "active" : null}>Home</Link></li>
                <li><Link to="/menu" onClick={toggle} className={isActive === "/menu" ? "active" : null}>Menu</Link></li>
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
              <Avatar alt="Remy Sharp" src={avatarUser} className="mr-10"/>
              <Link to="/login">
                <button className="btn-radius p-10 bg-blue-btn text-white text-uppercase text-bold">
                  { isAuthenticated ? "Logout" : "Login"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
