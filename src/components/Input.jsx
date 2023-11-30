function Input({ onAddTask }) {
  
    const handleSubmit =(e) => {
      e.preventDefault();
      const todoForm = new FormData(e.target);
      const description = todoForm.get('description');
      onAddTask(description);
      e.target.reset();
  };
  
      return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="description">Nueva Tarea:</label>
          <input type="text" name="description" id="description" placeholder="Ir al gimnasio" required/>
          <input type="submit" value="+" />
      </form>
    )
  }
  
  export default Input; 