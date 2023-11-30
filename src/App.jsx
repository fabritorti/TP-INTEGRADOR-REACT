import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTask] = useState([]);
  
  // Funcion para agregar una nueva tarea, recibe la descripcion que 
  // viene del evento que se dispara cuando le damos "Crear" en el 
  // componente Input.jsx 
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(), 
      description: description,
      isCompleted: false,
      };
      setTask([...tasks, newTask]);
      
  };

  //todo: Funcion  para borrar una tarea habiendo recibido el ID.
  const handleDeleteTask = (id) => {
    // borrar una tarea que coincida con el id   
  };

  
  return (
    <> 
    <h1>Lista de Tareas</h1>
    <Input onAddTask={(description) => handleAddTask (description) }></Input>    
    <TaskList tasks={tasks}/>
    </>
    )
}

export default App
