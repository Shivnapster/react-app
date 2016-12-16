import React from 'react';

class TableRow extends React.Component {
   render() {
      return (
         <ul className = "list-inline">
            <li>{this.props.data.id}</li>
            <li>{this.props.data.name}</li>
            <li>{this.props.data.age}</li>
         </ul>
      );
   }
}

export default TableRow;