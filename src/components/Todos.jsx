import React from 'react'
import TodoItem from './TodoItem'

let todosStyles = {
    backgroundColor: '#f4f4f4',
}

class Todos extends React.Component {

    render() {
        return (
            <div className="Todos" style={todosStyles}>
                {this.props.todos.map((todo, index) => (
                    <TodoItem todo={todo} key={todo.id} index={index}
                        onCrossClick={this.props.onCrossClick} onToggle={this.props.onToggle2} />
                ))}
            </div>
        )
    }
}


export default Todos
