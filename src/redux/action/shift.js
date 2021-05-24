import axios from 'axios';

export const getShift = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        `https://salty-dawn-54578.herokuapp.com/shift?staff=60710a93e3d1a8fe20caea97&startAt=${payload.startAt}&endAt=${payload.endAt}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcxMGE5M2UzZDFhOGZlMjBjYWVhOTciLCJwYXNzd29yZCI6IjE2NiIsInVzZXJuYW1lIjoic2VydmljZSJ9.W903N7zfXtezi0xxymdOCFZDYp6yStuC3wPZpdaQxJ4`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        console.log('data,', data);
        dispatch({
          type: 'SET_CURRENT_WEEK_SHIFT',
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createShift = (payload) => {
  return async (dispatch) => {
    return axios
      .post(`https://salty-dawn-54578.herokuapp.com/shift`, payload, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcxMGE5M2UzZDFhOGZlMjBjYWVhOTciLCJwYXNzd29yZCI6IjE2NiIsInVzZXJuYW1lIjoic2VydmljZSJ9.W903N7zfXtezi0xxymdOCFZDYp6yStuC3wPZpdaQxJ4`,
        },
      })
      .then((response) => {
        // const data = response.data.data.data;
        // console.log('data,', data);
        // dispatch({
        //   type: 'SET_CURRENT_WEEK_SHIFT',
        //   payload: data,
        // });
        console.log('response', response);
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getNextShift = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        `https://salty-dawn-54578.herokuapp.com/shift?staff=60710a93e3d1a8fe20caea97&startAt=${payload.startAt}&endAt=${payload.endAt}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcxMGE5M2UzZDFhOGZlMjBjYWVhOTciLCJwYXNzd29yZCI6IjE2NiIsInVzZXJuYW1lIjoic2VydmljZSJ9.W903N7zfXtezi0xxymdOCFZDYp6yStuC3wPZpdaQxJ4`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        console.log('dataattat,', data);
        dispatch({
          type: 'SET_NEXT_WEEK_SHIFT',
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
