import axios from 'axios';

export const getSalary = () => {
  return async (dispatch) => {
    return axios
      .get('https://salty-dawn-54578.herokuapp.com/salary/me', {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcxMGE5M2UzZDFhOGZlMjBjYWVhOTciLCJwYXNzd29yZCI6IjE2NiIsInVzZXJuYW1lIjoic2VydmljZSJ9.W903N7zfXtezi0xxymdOCFZDYp6yStuC3wPZpdaQxJ4`,
        },
      })
      .then((response) => {
        const data = response.data.data.Salary;
        dispatch({
          type: "SET_SALARY",
          payload: data
        })
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getSalaryByMonth = (payload) => {
  return async (dispatch) => {
    return axios
      .get(`https://salty-dawn-54578.herokuapp.com/salary/me?month=thang_${payload}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcxMGE5M2UzZDFhOGZlMjBjYWVhOTciLCJwYXNzd29yZCI6IjE2NiIsInVzZXJuYW1lIjoic2VydmljZSJ9.W903N7zfXtezi0xxymdOCFZDYp6yStuC3wPZpdaQxJ4`,
        },
      })
      .then((response) => {
        const data = response.data.data.Salary;
        dispatch({
          type: "SET_SALARY",
          payload: data
        })
      })
      .catch((error) => {
        throw error;
      });
  };
};
