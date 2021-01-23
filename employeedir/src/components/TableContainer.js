import React, { Component } from "react";
import Rows from "./Rows";
import API from "../utils/Api";
import Search from "./Search";
import moment from 'moment';

class TableContainer extends Component {

  state = {
    result: "",
    search: ""
  }

  //calls the function from the API call
  componentDidMount() {
    API.getPeopleList()
      .then(res => this.setState({ result: res.data }))

      .catch(err => console.log(err));
    console.log(this.state.result)
  }

//formats users' dates of birth in MM/DD/YYYY format
  getDate = (date) => {
    const bday = moment(date).format("L");
    return bday;
   }

   //sorts the users by first name alphabetically in ascending order
  sortFNames = () => {

    const newResults = this.state.result.results.sort(function (a, b) {

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

  //sorts the users by last name alphabetically in ascending order
  sortLNames = () => {

    const newResults = this.state.result.results.sort(function (a, b) {

      const sortedNamesA = a.name.last
      const sortedNamesB = b.name.last
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

  //will filter the results according to the user's input in the form
  handleInputChange = event => {
    let searchInput = event.target.value;
    let searchTerm = searchInput.toLowerCase();
    let filterEmployees = [];
    //filter through search for potential matches for searched username
    if (searchInput !== "") {
      filterEmployees =  this.state.result.results.filter(employee => 
        employee.name.first.toLowerCase().includes(searchTerm)  ||
        employee.name.last.toLowerCase().includes(searchTerm)
        // employee.email.toLowerCase().includes(searchTerm) ||
        // employee.phone.toLowerCase().includes(searchTerm)  ||
        // new Date(employee.dob.date).toLocaleDateString().includes(searchTerm)
      )
    } else {
      //setting filterUsername to the results grabbed from the API
      filterEmployees = this.state.result.results
    }
    this.setState({search: searchInput})
    this.setState({result: {results: filterEmployees}})
    console.log(this.state.filtered)
  }


  render() {
    return (
      <div>
        <Search
        value={this.state.search}
        onChange={this.handleInputChange}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col" onClick={this.sortFNames}>First Name</th>
              <th scope="col" onClick={this.sortLNames}>Last Name</th>
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
                fname={cool.name.first}
                lname={cool.name.last}
                phone={cool.phone}
                email={cool.email}
                dob={this.getDate(cool.dob.date)}
              />
            )))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableContainer;
