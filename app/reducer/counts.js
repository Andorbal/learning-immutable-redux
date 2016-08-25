import Immutable from 'immutable';

const initialState = Immutable.Map();

const updateCounts = (state, text, modifier) =>
  text.split(' ')
    .map(x => x.toLowerCase())
    .reduce((counts, word) => counts.update(word, x => modifier(x || 0)), state);

const counts = (state = initialState, action) => {
  switch (action.type) {
    case 'add-todo':
      return updateCounts(state, action.payload.text, x => x + 1);
    case 'remove-todo':
      return updateCounts(state, action.payload.text, x => x - 1);
    default:
      return state;
  }
}

export default counts;
