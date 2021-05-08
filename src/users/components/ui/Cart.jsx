import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  list: {
    width: 300,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: 10,
  },
  header: {
    marginBottom: 10,
  },
  main: {
    flexGrow: 1
  },
  footer: {
    display: "flex",
    justifyContent: "center"
  },
  total: {
    flexGrow: 1,
  },
  button: {
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    marginTop: 15
  }
});

const Cart = (props) => {
  const classes = useStyles();
  const { isCartOpened, toggleDrawer } = props;
  const listInCart = useSelector((state) => state.cart.listInCart);
  const total = useSelector((state) => state.cart.total);

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.header}>
        <Typography variant="h4" component="h4" className="text-center">
          Giỏ hàng
        </Typography>
      </div>
      <div className={classes.main}>
        <List>
          {listInCart.map((item, index) => (
            <CartItem item={item} key={index}/>
          ))}
        </List>
      </div>
      {/* <Divider /> */}
      <div className={classes.footer}>
        <div className={classes.total}>
          <p className={classes.totalTitle}>Thành tiền</p>
          <Typography variant="h6" component="h6">
            {total.toLocaleString()}đ
          </Typography>
        </div>
        <button className="btn-radius py-10 px-25 bg-blue-btn text-white text-uppercase text-bold">Mua hàng</button>
      </div>
    </div>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Drawer anchor="right" open={isCartOpened} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

Cart.propTypes = {
  isCartOpened: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

Cart.defaultProps = {
  toggleDrawer: null
};

export default Cart;