// create initial state
const initialState = {
  employee: [],
};

// create reducer for state management employee data
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    // action type to get employee data from action
    case "GET_EMPLOYEE_DATA":
      console.log(action.payload);
      return {
        ...state,
        employee: action.payload.results,
      };

    default:
      return state;
  }
};

// export reducer
export default employeeReducer;
