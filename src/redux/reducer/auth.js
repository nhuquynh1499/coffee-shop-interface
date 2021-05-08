const initialState = {
  userId: localStorage.getItem("userId") || null,
  token: localStorage.getItem("token") || null,
  infor: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATUS_LOGIN": {
      const { _id, token, username, phone, address, avatar } = action.payload;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", _id);

      return {
        ...state,
        userId: _id,
        token: token,
        infor: {
          username, phone, address, avatar
        }
      }
    }
    case "SET_INFOR": {
      const { username, phone, address, avatar } = action.payload;

      return {
        ...state,
        infor: {
          username, phone, address, avatar
        }
      }
    }
    case "DELETE_AUTH": {
      localStorage.removeItem("token")
      localStorage.removeItem("userId");
      return {
        token: null,
        userId: null,
        infor: null,
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;