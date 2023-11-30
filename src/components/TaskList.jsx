import { Button } from "bootstrap";

function TaskList({tasks}) {
    const handleDelete = (id) => {
        alert("Se borró: " + id);
    };

  return (
    <div>
        <ul>
            {tasks.map(t=> <li>{t.id} - {t.description} - {t.isCompleted? "Listo" : "Pendiente"} <button onClick={()=> handleDelete(t.id)}>BORRAR</button></li>)}
        </ul>
    </div>
  );
};

export default TaskList
