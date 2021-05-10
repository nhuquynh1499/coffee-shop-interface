import axios from 'axios';
import { toast } from "react-toastify";

export const sendPostLogin = (payload) => {
  return async (dispatch) => {
    return axios.post('https://salty-dawn-54578.herokuapp.com/users/log-in', payload)
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "SET_LOGIN",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const getInforByToken = (payload) => {
  return async (dispatch) => {
    return axios.get('https://salty-dawn-54578.herokuapp.com/users/me', {
      headers: {
        'Authorization': `Bearer ${payload}`
      }
    })
      .then(response => {
        const data = response.data.data.data;
        console.log(response)
        dispatch({
          type: "SET_INFOR",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_AUTH",
    })
  }
};

export const sendPostSignup = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: "RESET_STATUS"
    })
    return axios.post('https://salty-dawn-54578.herokuapp.com/users/sign-up', {
      headers: {
        'Authorization': `Bearer ${payload.token}`
      }
    })
      .then(response => {
        console.log(response.data)
        dispatch({
          type: "SET_STATUS",
          payload: {
            number: response.status,
            message: response.data.message,
          }
        })
      })
      .catch(error => {
        throw (error);
      });
  }
}

export const sendPostUpdateInfor = (payload) => {
  return async (dispatch) => {
    return axios.put('https://salty-dawn-54578.herokuapp.com/users/update',{
      username: payload.username,
      address: payload.address,
      phone: payload.phone
    }, {
      headers: {
        'Authorization': `Bearer ${payload.token}`
      }
    })
      .then(response => {
        toast.success(response.data.message)
      })
      .catch(error => {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại!")
      });
  }
}

export const sendPostUpdatePassword = (payload) => {
  return async (dispatch) => {
    // return axios.put('https://salty-dawn-54578.herokuapp.com/users/update',{
    //   password: payload.password,
    //   username: payload.username,
    //   address: payload.address,
    //   phone: payload.phone
    // }, {
    //   headers: {
    //     'Authorization': `Bearer ${payload.token}`
    //   }
    // })
    //   .then(response => {
    //     toast.success(response.data.message)
    //   })
    //   .catch(error => {
    //     toast.error("Đã xảy ra lỗi. Vui lòng thử lại!")
    //   });
  }
}