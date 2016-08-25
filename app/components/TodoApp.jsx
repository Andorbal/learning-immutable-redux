import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';

let number = 0;

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
        finished: false,
        id: Date.now(),
      },
    });

    var nextText = '';
    this.setState({text: nextText});
  },
  finishTodo(id) {
    this.props.dispatch({
      type: 'finish-todo',
      payload: id,
    });
  },
  removeTodo(id) {
    this.props.dispatch({
      type: 'remove-todo',
      payload: {
        id,
        text: this.props.items.find(x => x.id === id).text,
      }
    });
  },
  render() {
    console.log(`[${number++}] Rendering TodoApp...`);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} autoFocus />
          <button>{'Add #' + ((this.props.items.length || 0) + 1)}</button>
        </form>
        <TodoList items={this.props.items} onFinish={this.finishTodo} onRemove={this.removeTodo} />
      </div>
  )}
});

const mapStateToProps = state => {
  console.log(`[${number++}] Calculating TodoApp...`);

  return {
    items: state.get('todo').map(x => x.toObject()),
  }
}

export default connect(mapStateToProps)(TodoApp);
