import React from 'react';
    
    
    function Search(props) {
        return (
            <form>
            <input type="text" name="search" placeholder="Search" value={props.value} onChange={props.onChange} />
          </form>
        );
      }

export default Search;