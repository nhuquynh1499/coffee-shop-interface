const initialState = {
  listDrink: []
};

const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DRINK": {
      console.log(action.payload)
      const listData = action.payload;

      return {
        ...state,
        listDrink: listData
      }
    }
    default: {
      return state;
    }
  }
}

export default drinkReducer;