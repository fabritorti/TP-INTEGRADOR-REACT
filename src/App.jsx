import { useState, useEffect } from 'react';

import './App.css' ; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import TaskList from './components/TaskList';
import Search from './components/SearchBar';



function getTasksFromStorage(){
  const storedTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks :[];
};

function App() {
  const [tasks, setTasks] = useState(getTasksFromStorage());
  const [filteredTasks, setFilteredTasks] = useState ([])
  const [searchQuery, setSearchQuery] = useState("");

  const [storedTasks, setStoredTasks] = useState(()=>{
  const item = window.localStorage.getItem("tasks");
  return item ? JSON.parse(item): [];
})
  
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
      setFilteredTasks([...filteredTasks, newTask]);
  };

// Utilizacion de useEffect

useEffect (()=>{
 window.localStorage.setItem("tasks", JSON.stringify(tasks));
},[tasks]);


  //todo: Funcion  para borrar una tarea habiendo recibido el ID.
  // borrar una tarea que coincida con el id   
  const handleDelete = (id) => {
      const remainingTasks = tasks.filter(t=> t.id !== id);
      setTasks([...remainingTasks]);
      setFilteredTasks([...remainingTasks]);
    };
  
  // funcion que cambia el valor de isComplited. de pendiente a realizado.
  const handleChangeStatus =(id)=> {
    const modifiedTasks = tasks.map (t=>
      t.id === id?
      {...t, isCompleted: !t.isCompleted}
      :
      t
      )
      setTasks([...modifiedTasks]);
      setFilteredTasks([...modifiedTasks]);
   }; 

// funcion busqueda
   const handleSearchQuery =(query)=> {
    setSearchQuery(query);
    const queryResult = tasks.filter ( t=> t.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setFilteredTasks(queryResult);
   }

  return (
    <> 
    <h1 className='TituloApp'>Lista de Tareas</h1>
    <Search onSearch={query=>handleSearchQuery(query)}/>
    <Input onAddTask={(description) => handleAddTask (description) }/>    
    <TaskList 
    onDeleteTasks={(id)=>handleDelete(id)} tasks={filteredTasks}
    onChangeStatus={(id)=> handleChangeStatus(id)} />
    </>
    )
}

export default App
