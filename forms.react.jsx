import React from 'react';
import ReactDOM from 'react-dom';

//Set State Functions
class FormComponent extends React.Component {
  
  constructor(props){
    super(props);

    //Create a state
    this.state = {
      data: 'Initial Value'
    }
    
    //Form Elements retrive and fetch
    this.updateInputName = this.updateInputName.bind(this);
    this.clearInput = this.clearInput.bind(this);
  };
  
  // Update Value to the input field
  updateInputName(e){
    this.setState({data : e.target.value});
  }

  clearInput(){
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

   render() {
      return (
         <div>
            {
              /*Pass the input value to props*/
            }
            <Content myInputName ={this.state.data} updateStateName = {this.updateInputName} clearInput= {this.clearInput} />      
           
         </div>
      );
   }   
}

class Content extends React.Component{

  render(){
    return(
        <div>
          <h3>Form React File</h3>
          <input type="text" ref="myInput" value={this.props.myInputName} onChange={this.props.updateStateName}/>
          
          <h2>{this.props.myInputName}</h2>
          <button onClick = {this.props.clearInput}>CLEAR</button>
        </div>
    );
  }

}

export default FormComponent;