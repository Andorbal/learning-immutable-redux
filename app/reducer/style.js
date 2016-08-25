import Immutable from 'immutable';

const initialState = Immutable.Map({
  border: false,
  font: false,
});

const style = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle-border':
      return state.update('border', x => !x);
    case 'toggle-font':
      return state.update('font', x => !x);
    default:
      return state;
  }
}

export default style;
