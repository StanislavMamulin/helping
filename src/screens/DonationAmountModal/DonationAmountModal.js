import React, { useCallback, useEffect, useState } from 'react';
import { View, Modal, Text } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { InputField } from '../../components/InputFields/InputField/InputField';
import { ButtonStrip } from '../../components/ButtonStrip/ButtonStrip';

import { styles, inputFieldStyles, tabStyles } from './styles';
import { setEventDonationAmount } from '../../redux/eventSlice';

const defaultSelectedIndex = 0;
const amountVariants = ['100 ₽', '500 ₽', '1000 ₽', '2000 ₽'];

export const DonationAmountModal = ({
  show = false,
  onActionPress = () => {},
  onCancelPress = () => {},
}) => {
  const dispatch = useDispatch();
  const { donationAmount } = useSelector(state => state.event);
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const [segmentedTabActive, setSegmentedTabActive] = useState(true);

  const setDonation = useCallback(
    index => {
      const amount = parseInt(amountVariants[index], 10);
      dispatch(setEventDonationAmount(amount));
    },
    [dispatch],
  );

  const handleSegmentPress = useCallback(index => {
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    setDonation(selectedIndex);
  }, [setDonation, selectedIndex]);

  const handleInputDonationChanged = useCallback(
    donation => {
      if (donation) {
        setSegmentedTabActive(false);
      } else {
        setSegmentedTabActive(true);
      }

      const amount = +parseFloat(donation).toFixed(2);
      if (amount) {
        dispatch(setEventDonationAmount(amount));
      } else {
        dispatch(setEventDonationAmount(null));
      }
    },
    [dispatch],
  );

  const onShow = () => {
    setSegmentedTabActive(true);
    setSelectedIndex(defaultSelectedIndex);
  };

  return (
    <Modal visible={show} transparent animationType="fade" onShow={onShow}>
      <View style={styles.centeredView}>
        <View style={styles.container}>
          <View style={styles.contactsContainer}>
            <Text style={styles.headerTitle}>Спасибо за решение помочь!</Text>
            <Text style={styles.fieldTitle}>Выберите размер пожертвования</Text>
            <SegmentedControlTab
              values={amountVariants}
              selectedIndex={selectedIndex}
              onTabPress={handleSegmentPress}
              tabTextStyle={tabStyles.tabText}
              activeTabStyle={tabStyles.activeTab}
              tabStyle={tabStyles.tabStyle}
              borderRadius={2}
              enabled={segmentedTabActive}
            />
            <InputField
              title="или введите нужную сумму"
              placeholder="Введите сумму"
              extStyle={inputFieldStyles}
              onChangeText={handleInputDonationChanged}
              keyboardType="number-pad"
              value={() => (donationAmount ? String(donationAmount) : '')}
            />
          </View>
          <ButtonStrip
            actionText="ПЕРЕВЕСТИ"
            onActionPress={onActionPress}
            onCancelPress={onCancelPress}
          />
        </View>
      </View>
    </Modal>
  );
};

DonationAmountModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onActionPress: PropTypes.func,
  onCancelPress: PropTypes.func,
};
