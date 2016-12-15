import React from 'react';

class LifeCycleComponent extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        data: 0
      }

      this.setNNumbers = this.setNNumbers.bind(this);
    };

    setNNumbers() {
      this.setState({data : this.state.data + 1})    
    }
    
    render() {
      return(
          <button onClick = {this.setNNumbers} > LifeCycle </ button>
          <LifeCycle passNumber = {this.state.data}></LifeCycle>
      );
    }
}

class LifeCycle extends React.Component {

  componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

   render(){
      return(
        <div>
          <h3>{this.props.passNumber}</h3>
        </div>
      );
   }
}

export default LifeCycleComponent;