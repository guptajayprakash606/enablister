import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  data: [],
  pagination: {
    currentPage: 1,
    rowsPerPage: 10,
  },
  selectedUser: null,
};

export const beneficiarySlice = createSlice({
  name: 'beneficiaries',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      console.log(action.payload);
      state.data = [...state.data, { id: nanoid(), ...action.payload }];
    },
    editUser: (state, action) => {
      const { id, fullName, address, country, pincode } = action.payload;
      const existingUserIndex = state.data.findIndex(user => user.id === id);
      if (existingUserIndex !== -1) {
        state.data[existingUserIndex] = {
          id,
          fullName,
          address,
          country,
          pincode
        };
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter(user => user.id !== id);
    },
    setPage(state, action) {
      state.pagination.currentPage = action.payload;
    },
    setRowsPerPage(state, action) {
      state.pagination.rowsPerPage = action.payload;
    },
    setSelectedUser(state, action) {
      const selectedUser = state.data.find(user => user.id === action.payload);
      if (selectedUser) {
        state.selectedUser = selectedUser;
      }
    }
  }
});

export const { addUsers, editUser, deleteUser, setPage, setRowsPerPage, setSelectedUser  } = beneficiarySlice.actions;

export default beneficiarySlice.reducer;

