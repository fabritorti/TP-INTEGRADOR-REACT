import { Button } from "bootstrap";
import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";


function TaskList({tasks, onDeleteTasks, onChangeStatus}) {
      
  
  return (
    <>
    <div>
        <ul>
            {tasks.map(t=> <li key={t.id}
            style={t.isCompleted?{textDecoration:"line-through", color: "lightgray"}:undefined}
            >{t.id.slice(-3)} - {t.description} - {t.isCompleted? "Listo" : "Pendiente"}
            <CiTrash size={25} color="red" className="icons" onClick={()=> onDeleteTasks(t.id)}/>
            <CiCircleCheck size={25} color="red" className="icons" onClick={()=>onChangeStatus(t.id)}/>
 </li>)}
        </ul>
    </div>
    </>
  );
  
};

export default TaskList
