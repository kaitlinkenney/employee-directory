import React from "react";
import Rows from "./Rows";
import API from "../utils/Api";

class TableContainer extends React.Component{

//   state = {
//     people: []
// }

componentDidMount() {
  API.getPeopleList()
    .then(res => this.setState({ people: res.data }))
    .catch(err => console.log(err));
}

sortNames = (x) => {
  this.people.sort()
}
    
render(){
    return(
<table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col" class="btn" onClick={this.sortNames}>Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  {/* <tbody>
  {this.state.people.map(cool => (
   < Rows 
   image={cool.image}
   key={cool.image}
   name={cool.name}
   phone={cool.phone}
   email={cool.email}
   dob={cool.dob}

   /> 
  ))} */}
  {/* </tbody> */}
</table>
    )
}

}

export default TableContainer;

