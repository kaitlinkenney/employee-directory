import React, { Component } from 'react';
import API from "../utils/Api";

class Search extends Component {
    // state = {
    //     people: []
    // }

    
    onChange = (x) => this.setState({ [x.target.search]: x.target.value})

    componentDidMount() {
        API.getPeopleList()
          .then(res => this.setState({ people: res.data }))
          .catch(err => console.log(err));
      }
    
    render() {
        return (
            <form>
                <input type="text" name="search" placeholder="Search" onChange={this.onChange}/>
            </form>

        )
    }
}

export default Search;