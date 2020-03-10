import React from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import Input from './components/Input';

let todoData = [{
  id: 1,
  completed: false,
  title: 'купить хлеб'
}, {
  id: 2,
  completed: false,
  title: 'купить молоко'
}, {
  id: 3,
  completed: false,
  title: 'купить муку'
}];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.checkboxClick = this.handleChange.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.addValueToState = this.addValueToState.bind(this);
    this.addNewRecord = this.addNewRecord.bind(this);

    this.state = {
      todos: todoData,
    }
  };

  addNewRecord = () => {
    this.setState({
      todos: [...this.state.todos, {
        id: this.state.todos.length + 1,
        completed: false,
        title: this.state.inputValue
      }]
    }, () => { console.log(this.state.todos) })
  };


  //можно передать вторым параметром коллбек, на котором можно что-то делать с изменяемым стейтом, т.к. изменения асинхронны, то 
  //коллбек позволяет производить изменения сразу после асинхронной отработки. также можно делать это на componentdidupdate, но это 
  //увеличивает потенциальное количество рендоров из-за изменений вдвое (ждем рендер - добавляем изменение и еще раз рендерим)

  addValueToState = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  deleteRecord = (event) => {
    this.setState({
      todos: this.state.todos.filter(function (item) { return item.id !== +event.target.dataset.id })
    })
    // console.log(event.target.dataset.id)
  };

  handleChange = (event) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (+event.target.dataset.id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo
      }),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Input valueChange={this.addValueToState} addNewRecord={this.addNewRecord} />
        <Todos todos={this.state.todos} onToggle2={this.checkboxClick} onCrossClick={this.deleteRecord} /></div>
    )
  }
}
export default App