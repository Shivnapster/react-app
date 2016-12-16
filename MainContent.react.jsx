import React from 'react';

//Props Validation 
class MainComponent extends React.Component {
    constructor(props){
      super(props);

      // Using states
      this.state = {
        "header" : "Header from State.....",
        "content" : "Content from state......"
      }
    }
    
    render () {
      return(
        <div>
            <h3>Main Content File</h3>
            <div>{this.state.header}</div>
            <div>{this.state.content}</div>
            
            <p>Props Validation Value</p>
            <ul>
              <li>Array:  {this.props.PropArray}</li>
              <li>Bool:   {this.props.PropBool? "True.." : "False.."}</li>
              <li>Func:   {this.props.PropFunc(3)}</li>
              <li>Number: {this.props.PropNumber}</li>
              <li>String: {this.props.PropString}</li>
              <li>Object: {this.props.PropObject.ObjectName1}</li>
              <li>Object: {this.props.PropObject.ObjectName2}</li>
              <li>Object: {this.props.PropObject.ObjectName3}</li>
            </ul>

        </div>
        );
    }

}

  // Props Validation
  MainComponent.propsTypes = {
    PropArray: React.PropTypes.array.isRequired,
    PropBool: React.PropTypes.bool.isRequired,
    PropFunc: React.PropTypes.func,
    PropNumber: React.PropTypes.number,
    PropString: React.PropTypes.string,
    PropObject: React.PropTypes.object
  }

  //Props Values
  MainComponent.defaultProps = {
    PropArray: [1,2,3,4],
    PropBool: true,
    PropFunc: function(e){return e},
    PropNumber: 1,
    PropString: "String Value..",

    PropObject: {
      ObjectName1: "ObjectValue1",
      ObjectName2: "ObjectValue2",
      ObjectName3: "ObjectValue3"
    }
  }

export default MainComponent;