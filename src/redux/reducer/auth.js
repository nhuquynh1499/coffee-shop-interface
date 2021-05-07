const initialState = {
  userId: localStorage.getItem("userId") || null,
  token: localStorage.getItem("token") || null,
  infor: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATUS_LOGIN": {
      const { _id, token, username, phone, address } = action.payload;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", _id);

      return {
        ...state,
        userId: _id,
        token: token,
        infor: {
          username, phone, address
        }
      }
    }
    case "SET_INFOR": {
      const { username, phone, address } = action.payload;

      return {
        ...state,
        infor: {
          username, phone, address
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;