//*COMPONENTE TASK*// 

import './TaskList.css';
import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";


function Task ({task, onDeleteTasks, onChangeStatus }) {
      return (
      <tr
              className={task.isCompleted? "completed" : null }
              >
              <td> 
              {task.id.slice(-3)} 
              </td>
              <td>
              {task.description}
              </td>                       
              <td>
              <CiTrash className="icons" size={35} color="red" onClick={()=> onDeleteTasks(task.id)}/>
              </td>
              <td>
              <CiCircleCheck className="icons" size={35} color="blue" onClick={()=>onChangeStatus(task.id)} />
              </td>
        </tr>
      );
}

export default Task 