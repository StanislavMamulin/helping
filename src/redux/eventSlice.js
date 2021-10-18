import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  date: {
    from: 0,
    to: 0,
  },
  eventID: null,
  typeOfHelp: '',
  donationAmount: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setCurrentEvent: (_state, action) => {
      const { id = '', ...restInfo } = action.payload;

      return {
        ...initialState,
        eventID: id,
        ...restInfo,
      };
    },
    setSelectedTypeOfHelp: (state, action) => {
      state.typeOfHelp = action.payload;
    },
    setEventDonationAmount: (state, action) => {
      state.donationAmount = action.payload;
    },
  },
});

export const {
  setCurrentEvent,
  setSelectedTypeOfHelp,
  setEventDonationAmount,
} = eventSlice.actions;

export default eventSlice.reducer;
