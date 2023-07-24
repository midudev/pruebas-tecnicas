import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  open: false,
  message: "Message",
  alert: {
    color: "primary",
  },
  close: true,
};

const slice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },
    // Q U E R Y S

    // M U T A T I O N S
    openSnackbar(state, action) {
      const { open, message, variant, alert, close } = action.payload;

      state.open = open || initialState.open;
      state.message = message || initialState.message;
      state.alert = {
        color: (alert && alert.color) || initialState.alert.color,
      };
      state.close = close === false ? close : initialState.close;
    },

    closeSnackbar(state) {
      state.open = false;
      state.close = true;
    },
  },
});

export const { openSnackbar, closeSnackbar } = slice.actions;
export default slice.reducer;
