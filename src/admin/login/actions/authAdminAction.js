import axios from 'axios';
import { toast } from "react-toastify";

export const sendPostLogin = (payload) => {
  return async (dispatch) => {
    return axios.post('https://salty-dawn-54578.herokuapp.com/staff/log-in', payload)
      .then(response => {
        const data = response.data.data.data;
        console.log(response);
        dispatch({
          type: "SET_ADMIN_LOGIN",
          payload: data
        })
        toast.success("Đăng nhập thành công! Chào mừng bạn đã trở lại.")
      })
      .catch(error => {
        throw (error);
      });
  };
};