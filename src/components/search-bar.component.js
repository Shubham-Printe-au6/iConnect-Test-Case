import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar(props) {
  const [name, setName] = useState("");
  
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick(e) {
    props.makeRequest(name);
    setName("");
  }



  return (
    <div>
      <form className="create-search-request">
        <div className="input-group mb-3">
        <input onChange={handleChange} type="text" value={name} className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
        <button onClick={handleClick} className="btn btn-outline-secondary" type="button" id="button-addon2">
            <SearchIcon />    
        </button>
        </div>
        </div>
      </form>
    </div>


  );
}

export default SearchBar;