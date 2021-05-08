import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN;

export const getListStaff = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://salty-dawn-54578.herokuapp.com/staff",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        payload
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_LIST_STAFF",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
