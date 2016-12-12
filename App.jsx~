import React from 'react';

import HeaderCoponent from './header.react.jsx';
import FooterCoponent from './footer.react.jsx';

import MainComponent from './MainContent.react.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            <HeaderCoponent headervalue = {this.props.headerProp}/>
            <MainComponent />
               
            <h1>{this.props.contentProp}</h1>
            <FooterCoponent />
         </div>
      );
   }
}

App.defaultProps = {
  headerProp:"Modified header from props..",
  contentProp:"Modified Content Prop"
}

export default App;