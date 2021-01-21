import React from 'react';



    // onChange = (x) => this.setState({ search: x.target.value})
    
    
    function Search(props) {
        return (
            <form>
            <input type="text" name="search" placeholder="Search" value={props.value} onChange={props.onChange} />
          </form>
        );
      }

export default Search;