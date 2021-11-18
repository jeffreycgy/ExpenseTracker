import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import colors from './colors';

const EntryRow = ({ name = 'Name', amount = 0 }) => {
  return (
    <TouchableOpacity style={styles.entryRowBox}>
      <Image
        style={styles.entryRowIcon}
        source={{
          uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/main_icon.png',
        }}
      />
      <Text style={styles.entryRowName}>{name}</Text>
      <Text style={styles.entryRowAmount}>{amount}</Text>
    </TouchableOpacity>
  );
};

const DailyEntry = ({ date = '19-Nov', income = '100' }) => {
  return (
    <View style={styles.dailyEntryContainer}>
      <View style={styles.dailyEntryHeader}>
        <Text>Date</Text>
        <Text>Income</Text>
        <Text>Expenses</Text>
      </View>
      <EntryRow name="car" amount={10} />
      <EntryRow />
      <EntryRow />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <ActionButton
        style={styles.actionButton}
        buttonColor={colors.dark}
        offsetY={40}
        offsetX={16}
        onPress={() => {
          console.log('hi');
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.background}
        showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <DailyEntry />
          <DailyEntry />
          <DailyEntry />
          <DailyEntry />
          <DailyEntry />
          <DailyEntry />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    zIndex: 10,
  },
  dailyEntryContainer: {
    borderColor: colors.lightGrey,
    borderWidth: 1,
    margin: 12,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: colors.white,
  },
  dailyEntryHeader: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingVertical: 6,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
  },
  entryRowBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  entryRowIcon: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  entryRowName: {
    paddingLeft: 10,
    color: colors.dark,
  },
  entryRowAmount: {
    paddingLeft: 10,
    color: colors.dark,
  },
  background: {
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
