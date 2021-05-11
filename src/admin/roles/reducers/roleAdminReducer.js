const initialState = {
  roles: [],
};

const roleAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROLES": {
      return {
        ...state,
        roles: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default roleAdminReducer;
