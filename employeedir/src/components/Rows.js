import React from "react";

function Rows (props){
  
    // componentDidMount() {
    //     console.log(this.props);

    //   }

    
        return(
            <tr>
            <th scope="row"><img src={props.image}/></th>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
          </tr>  
        )
}

export default Rows;