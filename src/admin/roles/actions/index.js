import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const getRoles = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://salty-dawn-54578.herokuapp.com/staffRole",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        payload
      )
      .then((response) => {
        const data = response.data.data.staffRoles;
        dispatch({
          type: "GET_ROLES",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
