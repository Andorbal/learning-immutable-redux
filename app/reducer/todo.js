import Immutable from 'immutable';

const initialState = Immutable.List();

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'add-todo':
      return state.push(Immutable.Map(action.payload));
    case 'finish-todo':
      return state.map(x => x.get('id') === action.payload ? x.update('finished', t => !t) : x);
    case 'remove-todo':
      return state.filter(x => x.get('id') !== action.payload.id);
    default:
      return state;
  }
}

export default todo;
