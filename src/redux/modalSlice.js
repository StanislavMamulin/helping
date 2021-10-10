import { createSlice } from '@reduxjs/toolkit';
import { TYPES_OF_HELP_ENUM } from '../dataManager/data/typesOfHelp';

const initialState = {
  showHelpActionModal: false,
  helpType: TYPES_OF_HELP_ENUM.money,
  phone: null,
  email: null,
  specialization: null,
  helpProvided: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showHelpActionModal: state => {
      state.showHelpActionModal = true;
      state.helpProvided = false;
    },
    hideHelpActionModal: state => {
      state.showHelpActionModal = false;
      state.helpProvided = false;
    },
    updateContacts: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setTypeOfHelp: (state, action) => {
      state.helpType = action.payload;
    },
    successHelpProvided: state => {
      state.helpProvided = true;
    },
  },
});

export const {
  showHelpActionModal,
  hideHelpActionModal,
  updateContacts,
  setTypeOfHelp,
  successHelpProvided,
} = modalSlice.actions;

export default modalSlice.reducer;
