var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    //prevents page from reloading, so that we can deal with the request using React
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText"
          placeholder="What do you need to do next?"/>
          <button className="button expanded hollow">Add item</button>
          </form>
      </div>
        );
    }
});

module.exports = AddTodo;