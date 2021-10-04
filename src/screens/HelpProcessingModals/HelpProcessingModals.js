import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideHelpActionModal,
  successHelpProvided,
} from '../../redux/modalSlice';
import { ContactsModalScreen } from '../ContactsModalScreen/ContactsModalScreen';
import { DonationAmountModal } from '../DonationAmountModal/DonationAmountModal';
import { TYPES_OF_HELP_ENUM } from '../../dataManager/data/typesOfHelp';

export const HelpProcessingModals = () => {
  const dispatch = useDispatch();
  const { showHelpActionModal, helpType, helpProvided } = useSelector(
    state => state.modal,
  );

  const [showDonation, setShowDonation] = useState(false);
  const [showSpecialization, setShowSpecialization] = useState(false);

  useEffect(() => {
    if (helpType === TYPES_OF_HELP_ENUM.profHelp) {
      setShowSpecialization(true);
    } else {
      setShowSpecialization(false);
    }
  }, [helpType]);

  const handleActionFinalPress = () => {
    dispatch(hideHelpActionModal());
  };

  const handleActionTransitionPress = useCallback(() => {
    if (helpType === TYPES_OF_HELP_ENUM.money) {
      setShowDonation(true);
    } else {
      dispatch(successHelpProvided());
    }
  }, [dispatch, helpType]);

  const getActionText =
    helpType === TYPES_OF_HELP_ENUM.money ? 'ВЫБРАТЬ СУММУ' : 'ОТПРАВИТЬ';

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
        actionText={getActionText}
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
