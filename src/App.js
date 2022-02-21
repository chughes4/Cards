import React from 'react';
import CardGroup from './components/UI/CardGroup';
//import Button from './components/UI/Button/Button'

import './App.css';

// function App() {
//   const [showDiv, setShowDiv] = useState(false);

//   const toggleAnswer = () => {
//     setShowDiv(prevState => !prevState)
//   }

//   return (
//     <>
//       <div className="app">
//         <h1>Hi there!</h1>
//       </div>
//       {showDiv && 
//         <div className="app">
//           <p>Conditionally render div here</p>
//         </div>}
//       <Button onClick={toggleAnswer} >{ !showDiv ? 'Show Answer' : 'Hide Answer' }</Button>
//     </>
//   );
// }

function App() {
  return (
    <>
      <hr></hr>
      <CardGroup />
    </>
  )
}

export default App;
