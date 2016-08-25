import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import TodoList from './TodoList';

let number = 0;

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.finishTodo = this.finishTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

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
  }

  finishTodo(id) {
    this.props.dispatch({
      type: 'finish-todo',
      payload: id,
    });
  }

  removeTodo(id) {
    this.props.dispatch({
      type: 'remove-todo',
      payload: {
        id,
        text: this.props.items.find(x => x.id === id).text,
      }
    });
  }

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
};

const getTodos = state => state.get('todo');
const transformTodos = createSelector(
  [getTodos],
  todos => {
    console.log(`[${number++}] Calculating TodoApp...`);
    return todos.map(x => x.toObject());
  }
)

const mapStateToProps = state => {
  return {
    items: transformTodos(state),
  }
}

export default connect(mapStateToProps)(TodoApp);
