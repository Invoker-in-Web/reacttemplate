import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return state
    case VisibilityFilters.SHOW_COMPLETED:
      return state.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return state.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  fn: console.log(state),
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)