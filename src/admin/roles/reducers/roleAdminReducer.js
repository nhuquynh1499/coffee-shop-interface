const initialState = {
  roles: [],
  permissions: [],
};

const roleAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROLES": {
      return {
        ...state,
        roles: action.payload,
      };
    }
    case "POST_ROLE": {
      const roleData = [...state.roles];
      roleData.push(action.payload);
      return {
        ...state,
        roles: roleData,
      };
    }
    case "GET_PERMISSIONS": {
      return {
        ...state,
        permissions: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default roleAdminReducer;