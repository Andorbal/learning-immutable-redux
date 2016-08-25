import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

let number = 0;

const Counts = React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.counts !== nextProps.counts;
  },
  render() {
    console.log(`[${number++}] Rendering counts...`);

    const createItem = item => (
      <li key={item.word}>{item.word}: {item.count}</li>
    );

    return (
      <ul>
        {this.props.counts.map(createItem)}
      </ul>
  )}
});

const getCounts = state => state.get('counts');
const getWords = createSelector(
  [getCounts],
  counts => {
    console.log(`[${number++}] Calculating counts...`);

    return counts
      .entrySeq()
      .map(([key, value]) => ({ word: key, count: value }))
      .sortBy(x => x.word);
  }
);

const mapStateToProps = state => {
  return {
    counts: getWords(state),
  }
}

export default connect(mapStateToProps)(Counts);
