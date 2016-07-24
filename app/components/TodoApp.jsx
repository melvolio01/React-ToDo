var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;