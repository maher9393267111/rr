import { createSlice, configureStore } from '@reduxjs/toolkit';
import auth from './auth'
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: auth },
});

export const counterActions = counterSlice.actions;
//  export const authActions = authSlice.actions;

export default store;








// const counterreducer = (state={counter:0,show:false},action)=>{
    // if (action.type === 'increament') {
    // return {

    // counter :state.counter +1


    // }
    // }
    // if (action.type === 'discreament'){
    // return {

    // counter: state.counter -1

    // }



    // }

    // if (action.type === 'increase'){
    //     return {

    //     counter: state.counter + action.mount

    //     }



    //     }


    //     if(action.type === 'showme'){
    // return{
    // show: true

    // }


    //     }



    // return state





    // }
