import React, { Component } from 'react';


class Search extends Component {

    state = {
        search: ''
    }


    onChange = (x) => this.setState({ search: x.target.value})
    
    
    render() {
        return (
            <form>
                <input type="text" name="search" placeholder="Search" onChange={this.getValueInput}/>
            </form>

        )
    }
}

export default Search;