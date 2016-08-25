import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';

const TodoApp = React.createClass({
  getInitialState() {
    return {items: [], text: ''};
  },
  onChange(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: 'add-todo',
      payload: {
        text: this.state.text,
        id: Date.now(),
      },
    });

    var nextText = '';
    this.setState({text: nextText});
  },
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + ((this.props.items.length || 0) + 1)}</button>
        </form>
        <TodoList items={this.props.items} />
      </div>
  )}
});

const mapStateToProps = state => {
  return {
    items: state.get('todo'),
  }
}

export default connect(mapStateToProps)(TodoApp);
