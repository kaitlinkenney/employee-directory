import React from "react";

class Rows extends React.Component{
    componentDidMount() {
        console.log(this.props);

      }

    render(){
        return(
            <tr>
            <th scope="row">{this.props.number}</th>
            <td>{this.props.first}</td>
            <td>{this.props.last}</td>
            <td>{this.props.handle}</td>
          </tr>  
        )
    }
}

export default Rows;