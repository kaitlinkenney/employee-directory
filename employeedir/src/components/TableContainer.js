import React, { Component } from "react";
import Rows from "./Rows";
import API from "../utils/Api";
import Search from "./Search";

class TableContainer extends Component {

  state = {
    result: "",
    search: ""
  }


  componentDidMount() {
    API.getPeopleList()
      .then(res => this.setState({ result: res.data }))
      // .then(res=> console.log(res.data))

      .catch(err => console.log(err));
    console.log(this.state.result)
  }

  componentDidUpdate() {
    console.log(this.state.result)
  }

  getValueInput(evt) {
    const inputValue = evt.target.value;
    console.log(inputValue)
    this.filterNames(inputValue);
  }

  filterNames(inputValue) {
    const { result } = this.state;
    this.setState({
      filtered: result.filter(item =>
        item.results.phone.includes(inputValue)),
    });
  }

  sortNames = () => {

    const newResults = this.state.result.results.sort(function (a, b) {

      console.log(b.name.first)
      console.log(a.name.first)

      const sortedNamesA = a.name.first
      const sortedNamesB = b.name.first
      if (
        sortedNamesA < sortedNamesB
      ) {
        return -1
      }
      if (
        sortedNamesB < sortedNamesA) {
        return 1
      }
      return 0
    })
    this.setState({ newResults })
  }

  onChange = (x) => this.setState({ search: x.target.value})

  render() {
    return (
      <div>
        <form>
          <input type="text" name="search" placeholder="Search" onChange={this.getValueInput} />
        </form>
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
            {this.state.result === "" ? console.log("no result") : (this.state.result.results.map(cool => (
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
      </div>
    )
  }

}

export default TableContainer;





