import React from 'react';
import TableRow from './table-row.react.jsx';

// Displaying an array with the help of table row
class HeaderComponent extends React.Component {
    constructor() {
      super();
      //Declaring State
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }
   render() {
      return (
      
         <div className="content">
            <h3>Header React File</h3>
            <div >{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}</div>
            <br /><h1>{this.props.headervalue}</h1>
         </div>
      );
   }
}

export default HeaderComponent;