import Immutable from 'immutable';
import counts from './counts';
import todo from './todo';

const combineReducers = value => {
  const keys = Object.keys(value);

  const initialState = keys
    .map(x => ({name: x, value: value[x](undefined, {})}))
    .reduce((map, x) => map.set(x.name, x.value), Immutable.Map());

  return (state = initialState, action) => keys
    .map(x => ({name: x, value: value[x](state.get(x), action)}))
    .reduce((map, x) => map.set(x.name, x.value), state);
};

const reducer = combineReducers({
  counts,
  todo,
});

export default reducer;
