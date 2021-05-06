const initialState = {
  isAuthenticated: false,
  userId: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATUS_LOGIN": {
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload._id,
        token: action.payload.token
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;