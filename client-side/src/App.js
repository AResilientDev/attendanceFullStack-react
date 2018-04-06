// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   state = {students: []}
//      componentDidMount(){
//        fetch('/api/students',{
//
//      headers : {
//        'Content-Type': 'application/json',
//        'Accept': 'application/json',
//       }
//    })
//      .then(res => res.json())
//
//      .then(students => this.setState({ students }));
//
//  }
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       })
//         </div>
//     );
//   }
// }
//
// export default App;
import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import Students from './students/students.js';
  var num = "string";


class App extends Component {
  render() {
    return (
      <div>
        <Students image="students/South-Park2.jpg" color2 = "black" fontColor = "#C60323" fontColor2 = "#22A2A3"></Students>
      </div>

    );

  }

}



export default App;
