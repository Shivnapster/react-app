import React from 'react';

class FooterComponent extends React.Component {
  
  constructor(){
    super();

    this.state = {
      data: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  };

  setStateHandler() {
    var item = "New State..";
    var myArray = this.state.data;
    myArray.push(item)
    this.setState({data: myArray})
  };


   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>Set State</button>
            <p>State myArray : {this.state.data}</p>
         </div>
      );
   }
}

export default FooterComponent;