import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const postShift = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://salty-dawn-54578.herokuapp.com/shift", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_SHIFT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
