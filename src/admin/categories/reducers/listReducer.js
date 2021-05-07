const initialState = {};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATUS_LOGIN": {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default listReducer;
