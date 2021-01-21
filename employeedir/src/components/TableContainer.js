import React, { Component } from "react";
import Rows from "./Rows";
import API from "../utils/Api";

class TableContainer extends Component {

  state = {
    result: ""
  }


  componentDidMount() {
    API.getPeopleList()
      .then(res => this.setState({ result: res.data }))
      // .then(res=> console.log(res.data))
    
      .catch(err => console.log(err));
      console.log(this.state.result)
  }

  componentDidUpdate(){
    console.log(this.state.result)
  }
  // componentDidMount(){
  // console.log(this.state.result)
  // }

  // sortNames = (x) => {
  //   this.result.results.name.first.sort()
  // }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick={this.sortNames}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.state.result==="cat" ? console.log("no result") : console.log(this.state.result)} */}
          {/* {this.state.result.map(cool => (
            < Rows
              image={cool.results.picture.thumbnail}
              key={cool.results.phone}
              name={cool.results.name.first}
              phone={cool.results.phone}
              email={cool.results.email}
              dob={cool.results.dob.date}
            />
          ))} */}
             {this.state.result==="" ? console.log("no result") : (this.state.result.results.map(cool => (
            < Rows
              image={cool.picture.thumbnail}
              key={cool.phone}
              name={cool.name.first}
              phone={cool.phone}
              email={cool.email}
              dob={cool.dob.date}
            />
          )))}
        </tbody>
      </table>
    )
  }

}

export default TableContainer;





   // getValueInput (evt) {
    //     const inputValue = evt.target.value;
    //     this.filterNames(inputValue);
    //   }

    // filterNames (inputValue) {
    //   const { result } = this.state;
    //   this.setState({
    //     filtered: result.filter(item => 
    //        item.rsults.phone.includes(inputValue)),
    //   });
    // }