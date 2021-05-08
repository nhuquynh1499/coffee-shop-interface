const initialState = {
  token: localStorage.getItem("token") || null,
  infor: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATUS_LOGIN": {
      const { _id, token, username, phone, address, avatar, password } = action.payload;
      localStorage.setItem("token", token);

      return {
        ...state,
        token: token,
        infor: {
          userId: _id,
          username, phone, address, avatar, password
        }
      }
    }
    case "SET_INFOR": {
      const { username, phone, address, avatar, password, _id } = action.payload;

      return {
        ...state,
        infor: {
          userId: _id,
          username, phone, address, avatar, password
        }
      }
    }
    case "DELETE_AUTH": {
      localStorage.removeItem("token")
      return {
        token: null,
        infor: null,
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;