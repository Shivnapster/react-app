import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <Link to="/maincomponent">MainComponent</Link>
              
               <Link to="/lifecyclecomponent">LifeCycleComponent</Link>
               <Link to="/FooterComponent">FooterCoponent</Link>
               <Link to="/formcomponent">FormComponent</Link>
            </ul>
        
           {this.props.children}
           
         </div>
      );
   }
}

  //Assigning Prorps
  App.defaultProps = {
    headerProp : "Modified header from props..",
    contentProp : "Modified Content Prop"
  }
   
export default App;
