import React from "react";
import Rows from "./Rows";

class TableContainer extends React.Component{

state = {
    people: [
        {
          number: 1,
          first: "SpongeBob",
          last: "Squarepants",
          handle: "Driver"
        },
        {
            number: 2,
            first: "Squidward",
            last: "S",
            handle: "Cook",
          },
        ]
}
    
render(){
    return(
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {this.state.people.map(cool => (
   < Rows 
   key={cool.number}
   number={cool.number}
   first={cool.first}
   last={cool.last}
   handle={cool.handle}

   /> 
  ))}
  </tbody>
</table>
    )
}

}

export default TableContainer;