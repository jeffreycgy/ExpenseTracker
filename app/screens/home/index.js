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
import { connect } from 'react-redux';
import colors from '../../config/colors';

const mapStateToProps = (state, props) => {
  const { expense } = state;
  return { expense };
};

const mapDispatchToProps = (dispatch, props) => ({});

const EntryRow = ({ data }) => {
  const { name, amount } = data;
  return (
    <TouchableOpacity style={styles.entryRowBox} disabled>
      <Image
        style={styles.entryRowIcon}
        source={{
          uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/main_icon.png',
        }}
      />
      <Text style={styles.entryRowName} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.entryRowAmount}>{amount}</Text>
    </TouchableOpacity>
  );
};

const DailyEntry = ({ data }) => {
  const date =
    data &&
    data[0].date.toLocaleDateString('en-us', {
      day: 'numeric',
      month: 'short',
    });
  return (
    <View style={styles.dailyEntryContainer}>
      <View style={styles.dailyEntryHeader}>
        <Text>{date || ''}</Text>
      </View>
      {data &&
        data.map((item, index) => {
          return <EntryRow key={item.id} data={item} />;
        })}
    </View>
  );
};

const renderDailyEntry = expense => {
  return (
    expense &&
    Object.keys(expense).map((key, index) => {
      const data = expense[key];
      return <DailyEntry key={key} data={data} />;
    })
  );
};

const HomeScreen = ({ navigation, expense, viewExpenses }) => {
  return (
    <SafeAreaView style={styles.background}>
      <ActionButton
        style={styles.actionButton}
        buttonColor={colors.dark}
        offsetX={20}
        onPress={() => {
          navigation.navigate('ExpenseForm');
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.background}
        showsVerticalScrollIndicator={false}>
        <View style={styles.background}>{renderDailyEntry(expense)}</View>
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
    margin: 14,
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
    marginBottom: 12,
  },
  entryRowBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 12,
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
    width: '85%',
  },
  entryRowAmount: {
    paddingLeft: 10,
    color: colors.dark,
  },
  background: {
    backgroundColor: colors.light,
    flex: 1,
  },
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default Home;
