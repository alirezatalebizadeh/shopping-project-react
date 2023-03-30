import React, { Component } from 'react'
import Shop from './components/Shop/Shop'
import './App.css'




//refactor with class component
// export default class App extends Component {

//   render() {
//     return (
//       <div>
//         <Shop />
//       </div>
//     )
//   }
// }


//refactor with functional component

export default function App() {


  return (
    <div>
      <Shop />
    </div>
  )
}
