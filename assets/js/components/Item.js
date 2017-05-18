import React from 'react';
var createReactClass = require('create-react-class');

const Item = createReactClass({

  handleOnChange(e) {
    const content = e.target.value;
    this.props.updateTodo(this.props.todo.id, content);
  },
  handleKeyUp(e) {
    if (e.keyCode == 13) {
      this.close(e.target.value);
    }
  },
  handleOnBlur(e) {
    this.close(e.target.value);
  },
  close(value) {
    if (!value) {
      this.props.removeTodo(this.props.todo.id)
    } else {
      this.props.viewTodo(this.props.todo.id)
    }
  },
  componentDidUpdate() {
    if (this.props.todo.editing){
      this.refs.input.focus();
    }
  },
  render() {

    const { todo, i } = this.props;

    var style = (todo.editing) ? "editing" : "";
    style = (todo.completed) ? style + " completed" : style;
    style = style.trim();

    return (
      <li className={style} onDoubleClick={this.props.editTodo.bind(null, todo.id)} >
        <div className="view">
          <input className="toggle" checked={ todo.completed } type="checkbox" onClick={this.props.toggleComplete.bind(null, todo.id)} />
          <label>{ todo.content }</label>
          <button className="destroy" onClick={this.props.removeTodo.bind(null, todo.id)}></button>
        </div>
        <input  type="text" name="content" className="edit" ref="input" value={ todo.content } onChange={this.handleOnChange} onKeyUp={this.handleKeyUp} onBlur={this.handleOnBlur} />
      </li>
    )
  }
});

export default Item;
