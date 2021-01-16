import React from "react";

class Rows extends React.Component{
  
    componentDidMount() {
        console.log(this.props);

      }

    render(){
        return(
            <tr>
            <th scope="row">{this.props.image}</th>
            <td>{this.props.name}</td>
            <td>{this.props.phone}</td>
            <td>{this.props.email}</td>
            <td>{this.props.dob}</td>
          </tr>  
        )
    }
}

export default Rows;