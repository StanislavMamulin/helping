import React, { useState } from 'react';
import { View, Modal, Text } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import { styles, inputFieldStyles, tabStyles } from './styles';
import { InputField } from '../../components/InputFields/InputField/InputField';
import { ButtonStrip } from '../../components/ButtonStrip/ButtonStrip';

export const DonationAmountModal = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Modal visible transparent animationType="fade">
      <View style={styles.centeredView}>
        <View style={styles.container}>
          <View style={styles.contactsContainer}>
            <Text style={styles.headerTitle}>Спасибо за решение помочь!</Text>
            <Text style={styles.fieldTitle}>Выберите размер пожертвования</Text>
            <SegmentedControlTab
              values={['100 ₽', '500 ₽', '1000 ₽', '2000 ₽']}
              selectedIndex={selectedIndex}
              onTabPress={index => setSelectedIndex(index)}
              tabTextStyle={tabStyles.tabText}
              activeTabTextStyle={tabStyles.activeTabText}
              activeTabStyle={tabStyles.activeTab}
              tabStyle={tabStyles.tabStyle}
              borderRadius={2}
            />
            <InputField
              title="или введите нужную сумму"
              placeholder="Введите сумму"
              extStyle={inputFieldStyles}
            />
          </View>
          <ButtonStrip actionText="ПЕРЕВЕСТИ" />
        </View>
      </View>
    </Modal>
  );
};
