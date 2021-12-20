import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
      reminder: false
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      {tasks.length > 0 ? <Tasks tasks={tasks} 
        onDelete={deleteTask} /> : 'No Tasks yet!' }
    </div>
  );
}

export default App;
