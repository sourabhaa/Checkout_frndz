import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "https://panorbit.in/api/users.json";

const getUserDetailsApi = async () => {
  try {
    const response = await axios.get(baseURL);
    console.log("response: ", response);
    return response.data.users;
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  userDetails: getUserDetailsApi(),
  singleUserDetails: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      console.log("user.details initially: ", state.userDetails);
      state.userDetails = action.payload;
      console.log("state.userDetails: ", state.userDetails);
    },
    getSingleUserDetails: (id = 3, state, action) => {
      state.userDetails.map((user) => {
        if (user.id === id) {
          singleUserDetails = user;
          console.log("singleuserd", singleUserDetails);
        }
      });
    },
  },
});

export const { setUserDetails, getSingleUserDetails } = userSlice.actions;
export default userSlice.reducer;
