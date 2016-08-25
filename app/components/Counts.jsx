import React from 'react';
import { connect } from 'react-redux';

const Counts = React.createClass({
  render() {
    const createItem = item => (
      <li key={item.word}>{item.word}: {item.count}</li>
    );

    return (
      <ul>
        {this.props.counts.map(createItem)}
      </ul>
  )}
});

const mapStateToProps = state => {
  const words = state.get('counts')
    .entrySeq()
    .map(([key, value]) => ({ word: key, count: value }))
    .sortBy(x => x.word);

  return {
    counts: words,
  }
}

export default connect(mapStateToProps)(Counts);
