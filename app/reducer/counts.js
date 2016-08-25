import Immutable from 'immutable';

const initialState = Immutable.Map();

const counts = (state = initialState, action) => {
  switch (action.type) {
    case 'add-todo':
      return action.payload.text.split(' ')
        .reduce((counts, word) => counts.update(word.toLowerCase(), x => (x || 0) + 1), state);
    default:
      return state;
  }
}

export default counts;
