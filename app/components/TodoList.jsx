import React from 'react';
import classNames from 'classnames';

let number = 0;

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.items !== nextProps.items;
  }

  createItem(item) {
    const classnames = classNames({
      finished: item.finished,
    });

    return (
      <li key={item.id} className={classnames}>
        <a onClick={() => this.props.onFinish(item.id)}>{item.text}</a>
        <a onClick={() => this.props.onRemove(item.id)}>remove</a>
      </li>);
  }

  render() {
    console.log(`[${number++}] Rendering TodoList...`);
    return <ul className="todo-list">{this.props.items.map(this.createItem)}</ul>;
  }
};

export default TodoList;
