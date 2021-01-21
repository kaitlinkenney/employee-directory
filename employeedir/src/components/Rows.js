import React from "react";

function Rows (props){
  
    // componentDidMount() {
    //     console.log(this.props);

    //   }

    
        return(
            <tr>
            <th scope="row">{props.image}</th>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
          </tr>  
        )
}

export default Rows;