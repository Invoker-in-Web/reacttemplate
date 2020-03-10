import React from 'react';


let closeBtn = {
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '1px 6px',
    border: 'none'
}

export class TodoItem extends React.Component {

    getStyles() {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    todoStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid red',
        alignItems: 'center',
    }

    render() {
        const {title, id } = this.props.todo;
        return (
            <div style={this.getStyles()}>
                <p style={this.todoStyle}>
                    <span>
                        <input type="checkbox" data-id={id} onChange={this.props.onToggle} />{this.props.index+1} {title}
                    </span>
                    <button onClick={this.props.onCrossClick} data-id={id} style={closeBtn}>&times;</button></p>
            </div>
        )
    }
};

export default TodoItem
