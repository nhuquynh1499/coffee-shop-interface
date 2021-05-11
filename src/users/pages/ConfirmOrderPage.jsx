import { Card, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getInforByToken } from '../../redux/action/auth';
import { postNewOrder } from '../../redux/action/cart';
import OrderItem from '../components/order/OrderItem';
import Loading from '../components/ui/Loading';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: 'auto',
    padding: 20,
  },
  row: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
  },
  cols: {
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  list: {
    maxHeight: 250,
    overflowY: 'auto'
  }, 
  footerItem: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    '&:not(:last-child)': {
      marginBottom: 10,
    }
  }, 
  footerContent: {
    lineHeight: '1.25rem'
  }
}));

const ConfirmOrderPage = () => {
  const classes = useStyles();
  const [total, setTotal] = useState(0);
  const shippingFee = 15000;
  const token = useSelector((state) => state.auth.token);
  const infor = useSelector((state) => state.auth.infor);
  const listInCart = useSelector((state) => state.cart.listInCart);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getInforByToken(token))
  }, [token]);

  useEffect(() => {
    if (listInCart.length === 0) {
      history.push('/')
    } else {
      const totalInCart = listInCart.reduce((sum, item) => { 
        return sum + item.quantity*item.price
      }, 0);
      setTotal(totalInCart)
    }
  }, [listInCart])

  const handleSubmitOrder = () => {
    const dataFormat = listInCart.map((item) => {
      return {
        name: item._id,
        quantity: item.quantity,
      }
    })
    dispatch(postNewOrder({
      token,
      drink: dataFormat,
    }))
  }

  return (
    <div className="">
      <div className="my-30 container">
        <Card className={classes.root}>
          <Typography variant="h4" className="text-bold text-center mb-20">Order confirm</Typography>
          {
            infor ? (
              <div>
                <div className={classes.row}>
                  <div className={classes.cols}>
                    <Typography variant="h6" className="text-bold mb-10">Thông tin nhận hàng</Typography>
                    <div>
                      <Typography variant="body1">SĐT: {infor.phone}</Typography>
                      <Typography variant="body1">Địa chỉ: {infor.address}</Typography>
                    </div>
                  </div>

                  <div className={classes.cols}>
                    <Typography variant="h6" className="text-bold">Chi tiết đơn hàng</Typography>
                    <div className={classes.list}>
                      {
                        listInCart.map((item, index) => (
                          <OrderItem item={item} key={index}/>
                        ))
                      }
                    </div>
                    <div className={classes.footer}>
                      <div className={classes.footerItem}>
                        <Typography variant="body1">Thành tiền</Typography>
                        <Typography variant="h6" className={classes.footerContent}>
                          {total.toLocaleString()}đ
                        </Typography>
                      </div>
                      <div className={classes.footerItem}>
                        <Typography variant="body1">Phí ship</Typography>
                        <Typography variant="h6" className={classes.footerContent}>
                          {shippingFee.toLocaleString()}đ
                        </Typography>
                      </div>
                      <div className={classes.footerItem}>
                        <Typography variant="body1">Tổng tiền</Typography>
                        <Typography variant="h6" className={classes.footerContent}>
                          {(shippingFee + total).toLocaleString()}đ
                        </Typography>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="mt-20 flex-right">
                  <button onClick={handleSubmitOrder} className="btn-radius p-10 bg-blue-btn text-white text-uppercase text-bold">
                    <Typography variant="body2" className="text-bold">Xác nhận mua hàng</Typography>
                  </button>
                </div>
              </div>
              ) : 
              <Loading />
          }
        </Card>
      </div>
    </div>
  )
}

export default ConfirmOrderPage;