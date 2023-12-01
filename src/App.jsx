import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import TaskList from './components/TaskList';
 

function App() {
  const [tasks, setTasks] = useState([]);
  
  // Funcion para agregar una nueva tarea, recibe la descripcion que 
  // viene del evento que se dispara cuando le damos "Crear" en el 
  // componente Input.jsx 
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(), 
      description: description,
      isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      
  };

  //todo: Funcion  para borrar una tarea habiendo recibido el ID.
  // borrar una tarea que coincida con el id   
  const handleDelete = (id) => {
      const remainingTasks = tasks.filter(t=> t.id !== id);
      setTasks([...remainingTasks]);
    };
  
  // funcion que cambia el valor de isComplited. de pendiente a realizado.
  const handleChangeStatus =(id)=> {
    const modifiedTasks = tasks.map (t=>
      t.id === id?
      {...t, isCompleted: !t.isCompleted}
      :
      t
      )
      setTasks([...modifiedTasks])
   }; 


  return (
    <> 
    <h1>Lista de Tareas</h1>
    <Input onAddTask={(description) => handleAddTask (description) }></Input>    
    <TaskList 
    onDeleteTasks={(id)=>handleDelete(id)} tasks={tasks}
    onChangeStatus={(id)=> handleChangeStatus(id)} />
    </>
    )
}

export default App
