//*COMPONENTE TASKLIST*//
import './TaskList.css';
import '../App.css' ; 

import Task from './Task';

function TaskList ({tasks, onDeleteTasks, onChangeStatus}) {
        
  return (
        <table>
          <thead>
            <tr>
            <th> Ref</th>
            <th> TAREA </th>
            <th> BORRAR </th>
            <th> COMPLETAR </th>
            </tr>          
          </thead> 

          <tbody>
            {tasks.map(t => <Task key={t.id} task={t} onDeleteTasks={onDeleteTasks} onChangeStatus={onChangeStatus}/>)}
          </tbody>
        </table>
    );
  
};

export default TaskList
