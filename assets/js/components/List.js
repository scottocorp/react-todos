import React from 'react';
import Item from './Item';

const List = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const content = this.refs.content.value;
    if (content){
      this.props.addTodo(content);
      this.refs.todoForm.reset();
    }
  },
  toggleAllComplete(e) {
    this.props.toggleAllComplete(e.target.checked);
  },
  displayItem(todo, filter) {

    switch(filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return  todo.completed;
      case "":
      case null:
        return true;
      default:
        return false;
    }
  },
  render() {

    const { filter } = this.props;

    const active = this.props.todos.filter((todo) => this.displayItem(todo, "active"))
    const completed = this.props.todos.filter((todo) => this.displayItem(todo, "completed"))
    const filtered = this.props.todos.filter((todo) => this.displayItem(todo, filter))

    const todo_count = active.length + " item" + ((active.length != 1) ? "s" : "") + " left"

    const footer_style = {"display" : (this.props.todos.length) ? "block" : "none" }
    const toggle_all_style = footer_style

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
        </header>
        <section className="main">
          <div className="todo-form-wrapper">
            <form ref="todoForm" className="todo-form" onSubmit={this.handleSubmit}>
              <input className="new-todo" type="text" ref="content" placeholder="What needs to be done?"/>
              <input type="submit" hidden />
            </form>
            <input className="toggle-all" style={toggle_all_style} id="toggle-all" type="checkbox" checked={!active.length} onClick={this.toggleAllComplete}  />
          </div>
          <ul className="todo-list">
            {filtered.map((todo, i) => <Item {...this.props} key={i} i={i} todo={todo}  />)}
          </ul>
        </section>
        <footer className="footer" style={footer_style}>
          <span className="todo-count">{todo_count}</span>
          <ul className="filters">
            <li>
              <a className={(!filter) ? "selected" : ""} href="javascript:;" onClick={this.props.updateFilter.bind(null, "")}>All</a>
            </li>
            <li>
              <a className={(filter=="active") ? "selected" : ""} href="javascript:;" onClick={this.props.updateFilter.bind(null, "active")}>Active</a>
            </li>
            <li>
              <a className={(filter=="completed") ? "selected" : ""} href="javascript:;" onClick={this.props.updateFilter.bind(null, "completed")}>Completed</a>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
        </footer>
      </section>
    )
  }
});

export default List;
