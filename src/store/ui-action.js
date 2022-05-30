import axios from "axios";
import { counterActions } from "./ui-slice";
export const fetchUser = (data) => {
  return async (dispatch) => {
    const fetchData = async (state, action) => {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${5}`
      );
      console.log(response.data.results);
      return response.data.results;
    };
    try {
      const data = await fetchData();
      dispatch(counterActions.fetchData({ users: data }));
    } catch (error) {
      console.log(error);
    }
  };
};
