const initialState = {
  list: [],
};

const listAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST": {
      return {
        ...state,
        list: action.payload,
      };
    }
    case "POST_LIST": {
      let listData = [...state.list];
      listData.push(action.payload);

      return {
        ...state,
        list: listData,
      };
    }
    default: {
      return state;
    }
  }
};

export default listAdminReducer;
