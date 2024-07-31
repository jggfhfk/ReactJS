import React, { useEffect, useState } from 'react'
import "./Todo.css"

const Todo = () => {

    const [task, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    const [text, setText] = useState()

    const handleClick = () => {
        const newTask = [...task]
        setText("")
        const todo = {value: text, isCompleted: false, id: new Date().getTime()}
        newTask.push(todo)
        console.log(newTask)
        setTask(newTask)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleClick()
        }
    }

    const deleteTask = (id) => {
        const filterTasks = task.filter((task) => {
            return task.id !== id;
        })

        setTask(filterTasks)
    }

    const handleComplete = (id) => {
        const newTask = [...task]
        newTask.forEach((todo) => {
            if(todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
        })
        setTask(newTask)
    }


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task))
    }, [task])

  return (
    <div>
      <input type="text" placeholder='add a task' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => handleKeyDown(e)}/>
      <button onClick={handleClick}>Add task</button>
      <br /><br />
      <div className="list">
      <h1>tasks</h1>
        {task.map((val, index) => {
            return <div className='tasks' key={index}>
                <h5 className={val.isCompleted ? "line": "none"}>{val.value}</h5>
                <span onClick={() => handleComplete(val.id)}>✔</span>
                <span></span>
                <span onClick={() => deleteTask(val.id)}>❌</span>
            </div>
        })}
      </div>
    </div>
  )
}

export default Todo
