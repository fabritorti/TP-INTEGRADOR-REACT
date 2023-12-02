//*COMPONENTE SEARCHBAR*//

import './SearchBar.css';
// import '../App.css' ;


function Search ({onSearch}){
    return (
        <form>
            <input 
            type="search"
            name="search"
            id="search"
            aria-label="Buscar tarea" 
            placeholder="Buscar tarea"
            onChange={(e)=> onSearch(e.target.value)}
            />
        </form>
    );
}

export default Search;
