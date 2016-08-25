import Immutable from 'immutable';

const initialState = Immutable.List();

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'add-todo':
      return state.push(action.payload);
    default:
      return state;
  }
}

export default todo;
