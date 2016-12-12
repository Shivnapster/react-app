import React from 'react';
import TableRow from './table-row.react.jsx';

class HeaderComponent extends React.Component {
    constructor() {
      super();
      
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
         <div>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}

               </tbody>
            </table>
            <h1>{this.props.headervalue}</h1>
         </div>
      );
   }
}

export default HeaderComponent;