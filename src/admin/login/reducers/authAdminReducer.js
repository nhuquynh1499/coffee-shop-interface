const initialState = {
  token: localStorage.getItem("token") || null,
  status: null,
  infor: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADMIN_LOGIN": {
      const { _id, token, username, phone, address, avatar, permissions } = action.payload;
      localStorage.setItem("token", token);

      return {
        ...state,
        token: token,
        infor: {
          userId: _id,
          username, phone, address, avatar, permissions
        }
      }
    }
//     case "SET_INFOR": {
//       const { username, phone, address, avatar, password, _id } = action.payload;

//       return {
//         ...state,
//         infor: {
//           userId: _id,
//           username, phone, address, avatar, password
//         }
//       }
//     }
//     case "DELETE_AUTH": {
//       localStorage.removeItem("token")
//       return {
//         token: null,
//         infor: null,
//       }
//     }
//     case "SET_STATUS": {
//       return {
//         ...state,
//         status: action.payload,
//       }
//     }
//     case "RESET_STATUS": {
//       return {
//         ...state,
//         status: null,
//       }
//     }
    default: {
      return state;
    }
  }
}

export default authReducer;