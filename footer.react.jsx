import React from 'react';
import ReactDOM from 'react-dom';

//Set State Functions
class FooterComponent extends React.Component {
  
  constructor(){
    super();

    //Create a state
    this.state = {
      data: []
    }
    
    // Set state method used for updating the the state of the Component.
    // This method will not replace the state but only add changes to original state.
    this.setStateHandler = this.setStateHandler.bind(this);

    // Sometimes you want to update the component manually. 
    //You can achieve this by using forceUpdate() method.
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    
    // For DOM manipulation, we can use ReactDOM.findDOMNode() method. First we need to import react-dom.
    this.findDomforce = this.findDomforce.bind(this);
  };
  
  findDomforce(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }
  
  forceUpdateHandler() {
      this.forceUpdate();
   };

  setStateHandler() {
   

    if(typeof  item == "undefined" ||  item == null){
      var item = 0;
    }
    else{
        var item = item+1;
    }
 
    var myArray = this.state.data;
    myArray.push(item)
    this.setState({data: myArray})
  };


   render() {
      return (
         <div className="content">
            <h3>Footer Content File</h3>
            <button onClick = {this.setStateHandler}>Set State</button>
            <p>State myArray : {this.state.data}</p>
        
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <p id = "myDiv">Random number: {Math.random()}</p>

            <button onClick = {this.findDomforce}>FIND DOME NODE</button>
           
         </div>
      );
   }   
}

export default FooterComponent;