import { CREATE_EXPENSE, VIEW_EXPENSES } from './actions';

const initialState = {
  '2021-11-18': [
    {
      id: Math.random().toString(16).slice(2),
      name: 'Food',
      amount: 10,
      date: new Date('2021-11-18'),
    },
    {
      id: Math.random().toString(16).slice(2),
      name: 'Shopping',
      amount: 20,
      date: new Date('2021-11-18'),
    },
  ],
  '2021-11-17': [
    {
      id: Math.random().toString(16).slice(2),
      name: 'Pet',
      amount: 30,
      date: new Date('2021-11-17'),
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXPENSE: {
      const { data } = action.payload;
      const { date } = data;
      const id = Math.random().toString(16).slice(2);
      const keyString =
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      let newState = {};
      for (const key in state) {
        console.log('state key', key);
        if (key !== keyString) {
          let newObj = {};
          newObj[keyString] = [data];
          // newState[keyString] = [data];
          newState = Object.assign(newObj, state);
        } else {
          newState = state[key].unshift(data);
        }
      }
      console.log('newState', newState);
      console.log('keyString', keyString);
      // console.log('from reducer', data);
      // return { ...state, ...payload };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export { reducer };
