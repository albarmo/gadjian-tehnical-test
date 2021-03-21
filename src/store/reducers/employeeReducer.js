const initialState = {
  employee: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default employeeReducer;
