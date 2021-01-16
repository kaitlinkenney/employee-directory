import React, { Component } from 'react';


class Search extends Component {
   
    
    onChange = (x) => this.setState({ [x.target.search]: x.target.value})

    
    
    render() {
        return (
            <form>
                <input type="text" name="search" placeholder="Search" onChange={this.onChange}/>
            </form>

        )
    }
}

export default Search;