import React from 'react'
import {useTodo} from '../contexts/TodoContext'

function ToDoForm() {
    const [todo ,setTodo] = React.useState("")
    const {addTodo}=useTodo()
    const add = (e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo,completed:false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className='flex'>
        <input type="text" placeholder='write todo...' className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5' 
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button type='submit' className='bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 duration-150'>
            Add
        </button>
    </form>
  )
}

export default ToDoForm