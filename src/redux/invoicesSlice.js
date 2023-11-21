import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("invoices");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("invoices", serializedState);
  } catch (err) {
    console.log("error while saving in localStorage", err);
    // Handle errors here
  }
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: loadState(),
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    deleteInvoice: (state, action) => {
      const updatedState = state.filter((invoice) => invoice.id !== action.payload);
      saveState(updatedState);
      return updatedState;
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex((invoice) => invoice.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload.updatedInvoice;
        saveState(state);
      }
    },
    updateBulkInvoice: (state, action) => {
      // state = action.payload;
      saveState(state);
      return action.payload;
    },
  },
});

export const { addInvoice, deleteInvoice, updateInvoice, updateBulkInvoice } = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
