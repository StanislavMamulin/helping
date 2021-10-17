import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideHelpActionModal,
  successHelpProvided,
} from '../../redux/modalSlice';

import { setEventDonationAmount } from '../../redux/eventSlice';

import { ContactsModalScreen } from '../ContactsModalScreen/ContactsModalScreen';
import { DonationAmountModal } from '../DonationAmountModal/DonationAmountModal';

import { TYPES_OF_HELP_ENUM } from '../../dataManager/data/typesOfHelp';
import { addHelp } from '../../dataManager/dataManager';

import { getActionText } from './data';

export const HelpProcessingModals = () => {
  const dispatch = useDispatch();
  const { showHelpActionModal, helpType, helpProvided, contacts } = useSelector(
    state => state.modal,
  );
  const eventInfo = useSelector(state => state.event);
  const { uid } = useSelector(state => state.user.user);

  const [showDonation, setShowDonation] = useState(false);
  const [showSpecialization, setShowSpecialization] = useState(false);

  useEffect(() => {
    if (helpType === TYPES_OF_HELP_ENUM.profHelp) {
      setShowSpecialization(true);
    } else {
      setShowSpecialization(false);
    }
  }, [helpType]);

  // send a request for help
  const handleActionFinalPress = () => {
    dispatch(hideHelpActionModal());
    addHelp(uid, { ...eventInfo, contacts });
    dispatch(setEventDonationAmount(null));
  };

  // go to the next modal window
  const handleActionTransitionPress = useCallback(() => {
    if (helpType === TYPES_OF_HELP_ENUM.money) {
      setShowDonation(true);
    } else {
      dispatch(successHelpProvided());
    }
  }, [dispatch, helpType]);

  return (
    <>
      <ContactsModalScreen
        show={showHelpActionModal}
        onActionPress={
          helpProvided ? handleActionFinalPress : handleActionTransitionPress
        }
        onCancelPress={() => {
          dispatch(hideHelpActionModal());
        }}
        helpProvided={helpProvided}
        showSpecialization={showSpecialization}
        actionText={getActionText(helpType)}
      />
      <DonationAmountModal
        show={showDonation}
        onActionPress={() => {
          setShowDonation(false);
          dispatch(successHelpProvided());
        }}
        onCancelPress={() => {
          setShowDonation(false);
        }}
      />
    </>
  );
};
