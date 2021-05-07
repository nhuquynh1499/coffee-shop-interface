import axios from 'axios';

export const getList = (payload) => {
  return async (dispatch) => {
    return axios.post('https://salty-dawn-54578.herokuapp.com/category', payload)
      .then(response => {
        const data = response;
        dispatch({
          type: "GET_LIST",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};
