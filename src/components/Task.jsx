import React from 'react'

export const Task = ({task, deleteTask}) => {
  return (
      <div className='task'>
          <h2>{task}</h2>
          <button onClick={deleteTask}>delete</button>
          
    </div>
  )
}
