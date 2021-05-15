import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/commons/logo.png";
import iconSearch from "../../../assets/images/commons/_i_icon_search.svg";
import avatarUser from '../../../assets/images/commons/icon_user.png';
import { Avatar, Badge, makeStyles } from "@material-ui/core";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/action/auth";

const useStyles = makeStyles(() => ({ 
  cartIcon: {
    cursor: 'pointer',
    verticalAlign: 'baseline'
  }
}));

export default function Header() {
  const classes = useStyles();
  let { pathname } = useLocation();
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") ? true : false);
  const [isActive, setIsActive] = useState(pathname);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const listInCart = useSelector((state) => state.cart.listInCart);
  const token = useSelector((state) => state.auth.token);
  const infor = useSelector((state) => state.auth.infor);
  const isUser = (pathname.indexOf("admin") === -1 ? true : false);

  const toggleDrawer = (open) => (event) => {
    if ( event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") )
      return;

    setIsCartOpened(open);
  };

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  useEffect(() => {
    if (infor) {
      setAvatar(infor.avatar);
    }
  }, [infor]);

  useEffect(() => {
    setIsAuthenticated(token);
  }, [token]);

  const toggle = () => {
    setIsActive(pathname);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    dispatch(logout());
  }

  return (
    <div className="header bg-white">
      { isUser &&
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
                { token && <li><Link to="/user/detail" onClick={toggle} className={isActive === "/user/detail" ? "active" : null}>Account</Link></li> }
              </ul>
            </div>
            <div className="actions flex-middle">
              <ul className="flex-middle">
                <li className="mr-20">
                  <Badge badgeContent={listInCart.length} color="primary" showZero className={classes.cartIcon}>
                    <LocalMallOutlinedIcon onClick={toggleDrawer(true)} />
                  </Badge>
                </li>
                <li className="mr-20">
                  <img src={iconSearch} alt="Icon Search" />
                </li>
              </ul>
              {
                isAuthenticated &&
                  <Link to="/user/detail">
                    <Avatar alt="Remy Sharp" src={avatar || avatarUser} className="mr-10"/>
                  </Link>
              }
              {
                isAuthenticated ? <button onClick={handleLogout}className="btn-radius p-10 bg-blue-btn text-white text-uppercase text-bold">Logout</button> : 
                <Link to="/login">
                  <button className="btn-radius p-10 bg-blue-btn text-white text-uppercase text-bold">Login</button>
                </Link>
              }
              
            </div>
          </div>
        </div>
      </div>
      }
      <Cart isCartOpened={isCartOpened} toggleDrawer={toggleDrawer}></Cart>
    </div>
  );
}
