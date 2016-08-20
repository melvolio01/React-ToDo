var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: true,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Build an app'
        }, {
          id: 2,
          text: 'Clean my room'
        }, {
          id: 3,
          text: 'Get a new job'
        }, {
          id: 4,
          text: 'Write a book'
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    alert('new Todo' + text)
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>

    )
  }
});

module.exports = TodoApp;