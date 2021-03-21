import axios from "axios";

export const getEmployeeData = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "https://randomuser.me/api/?results=28",
      headers: {
        "app-id": "605700b9153ff396b8a3fd65",
      },
    })
      .then(({ data }) => {
        // console.log("data dummy", data);
        dispatch({ type: "GET_EMPLOYEE_DATA", payload: data });
      })
      .catch((error) => {
        console.log(error, "failed fetch data");
      });
  };
};
