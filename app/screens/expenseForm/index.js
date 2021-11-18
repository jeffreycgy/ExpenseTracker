import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../config/colors';
import { CREATE_EXPENSE } from '../../models/expense/actions';

// const mapStateToProps = (state, props) => {
//   const data = state.expense;
//   return {data};
// };

const mapDispatchToProps = (dispatch, props) => ({
  createExpense: data => {
    dispatch({
      type: CREATE_EXPENSE,
      payload: { data },
    });
  },
});

const ExpenseFormScreen = ({ createExpense, navigation }) => {
  const [date] = useState(new Date());
  const [name, setName] = useState('Drinks');
  const [amount, setAmount] = useState('10');

  const onSubmit = () => {
    console.log('OK');
    createExpense({ name, amount, date });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.expenseFormWrapper}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          editable={false}
          defaultValue={date.toLocaleDateString('en-us', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        />
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.input}
          placeholder="Description of expense"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Expenses Amount</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Expense amount (numbers only)"
          value={amount}
          onChangeText={setAmount}
        />
        <TouchableOpacity style={styles.okButton} onPress={onSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  expenseFormWrapper: {
    margin: 20,
  },
  label: {
    color: colors.dark,
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '600',
  },
  input: {
    backgroundColor: colors.white,
    padding: 10,
  },
  okButton: {
    width: '100%',
    height: 40,
    backgroundColor: colors.dark,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
  },
  background: {
    backgroundColor: colors.light,
    height: '100%',
  },
});

const ExpenseForm = connect(null, mapDispatchToProps)(ExpenseFormScreen);

export default ExpenseForm;
