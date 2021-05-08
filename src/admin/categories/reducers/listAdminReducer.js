const initialState = {
  list: []
};

const listAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST": {
      return {
        ...state,
        list: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default listAdminReducer;
