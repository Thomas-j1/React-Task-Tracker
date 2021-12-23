import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

function App() {
  const [taskId, increaseId] = useState(2)
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'test1',
      day: 'jan 4th at 2:40pm',
      reminder: false
    },
    {
      id: 1,
      text: 'test2',
      day: 'jan 4th at 2:40pm',
      reminder: true
    },
  ])

  //Add Task
  const addTask = (task) => {
    console.log(task)
    //const id = Math.floor(Math.random() * 10000) + 1
    //const id = tasks.length
    const id = taskId
    increaseId(taskId + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }


  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task,
          reminder: !task.reminder
        } : task
      )
    )
  }

  return (
    <div className="container">
      <Header title='Task Tracker'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} /> : 'No Tasks yet!'}
    </div>
  );
}

export default App;
