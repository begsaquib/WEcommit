import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "./api";

export const fetchMembers = createAsyncThunk(
  "team/fetchMembers",
  async ({ teamName, token }, { rejectWithValue }) => {
    try {
      const response = await api.get(`team/${teamName}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      
      return response.data.members;
      
    } catch (error) {
      console.error("Error fetching members:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);


export const addMember = createAsyncThunk(
  "team/addMember",
  async ({ teamName, userName, token }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `/teams/${teamName}/addMember`,
        { userName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return userName; 
    } catch (error) {
     
      return rejectWithValue(error.response.data);
    }
  }
);


export const removeMember = createAsyncThunk(
  "team/removeMember",
  async ({ teamName, userName, token }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/teams/${teamName}/remove`, {
        data: { userName },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return userName; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const teamSlice = createSlice({
  name: "team",
  initialState: {
    members: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      state.members = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchMembers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    
    builder.addCase(addMember.fulfilled, (state, action) => {
      state.members.push(action.payload); 
    });

   
    builder.addCase(removeMember.fulfilled, (state, action) => {
      state.members = state.members.filter(
        (member) => member !== action.payload
      );
    });
  },
});

export default teamSlice.reducer;
