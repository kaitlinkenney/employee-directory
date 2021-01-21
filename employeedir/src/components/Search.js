import React, { Component } from 'react';


class Search extends Component {

    state = {
        search: ''
    }
   
    // const searched = props.result.filter(phonenum => phonenum.phone);

    onChange = (x) => this.setState({ search: x.target.value})



    
    
    
    render() {
        return (
            <form>
                <input type="text" name="search" placeholder="Search" onChange={this.onChange}/>
            </form>

        )
    }
}

export default Search;