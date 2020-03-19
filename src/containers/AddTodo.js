import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let myInput

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!myInput.value.trim()) {
            return
          }
          dispatch(addTodo(myInput.value))
          myInput.value = ''
        }}
      >
        <input ref={thisNode => (myInput = thisNode)} /> 
        {/* thisNode - переменная, хранящая данный узел, ее приравниваем к let input */}
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)