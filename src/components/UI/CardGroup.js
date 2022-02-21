import React, { useState } from 'react';
import Button from './Button/Button';

import '../../App.css';

function CardGroup() {
  const [showDiv, setShowDiv] = useState({
      words:
      [
        {
            question: 'Are',
            answer: '1',
            prevState: false,
        },
        {
            question: 'we',
            answer: '2',
            prevState: false
        },
        {
            question: 'There',
            answer: '3',
            prevState: false
        },
        {
            question: 'yet',
            answer: '4',
            prevState: false
        }
      ]
  });

  let buttonText = 'Show Answers'

  const toggleAnswer = (question) => {
      console.log(question.target.innerHTML)
      //const newShowDiv = [...showDiv];
      //newShowDiv[index].prevState = !newShowDiv[index].prevState
      //setShowDiv(prevState => !prevState)
    let newWords = showDiv.words.map(word => {
        //console.log(word.question)
        if (word.question === question.target.innerHTML) {
     
            return {...word, prevState: !word.prevState, buttonText}
        }
        return word;
    }) 
    setShowDiv({words: newWords})
  }

  //let buttonText = 'Show Answers'

  const toggleAllAnswers = (question) => {
    //buttonText = 'Hide Answer'
  let newWords = showDiv.words.map(word => {
      //console.log(word.question)
        
          return {...word, prevState: !word.prevState  }
          
      //return word;
  }) 
  
  setShowDiv({words: newWords})
}

  

//   const toggleAnswer = e => {
//     const { value } = e.target;
//     setShowDiv(prevState => ({
//         ...prevState,
//         value 
//     }));
// };
  

//   const words = [
//       {
//         question: 'Are',
//         answer: '1',
//         prevState: false,
//         //toggleCard = ()=> setShowDiv(prevState => !prevState)
//         //toggleCard: () => setShowDiv(prevState => !prevState)
//       },
//       {
//         question: 'we',
//         answer: '2',
//         prevState: false
//       },
//       {
//         question: 'There',
//         answer: '3',
//         prevState: false
//       },
//       {
//         question: 'yet',
//         answer: '4',
//         prevState: false
//       }
//   ]

  const cardWordGroup = showDiv.words.map((word) => {
      //let rObj = {}
      //rObj[word.question] = word.answer
    //   return ( 
    //       <div>
    //         <h1>{word.question}</h1>
    //         <p>{word.answer}</p>
    //       </div>
    //   );
    return (

    <div key={showDiv.words.indexOf(word)} onClick={ toggleAnswer }>
       <div className="app" key={word.question} onClick={ toggleAnswer }> 
         <h1>{word.question}</h1>
       </div>
        {word.prevState && 
        <div className="app" key={word.answer}>
           <p>Conditionally render div here</p>
           {word.answer}
        </div>}
    
    </div>

    )
  }


     // <h1> word.question </h1>
       
        // {showDiv && 
        // <div className="app">
        //     <p>Conditionally render div here</p>
        //     {word.answer}
        // </div>}
        // <Button onClick={toggleAnswer} >{ !showDiv ? 'Show Answer' : 'Hide Answer' }</Button>

  );

  return (
    // <>
    //   <div className="app">
    //     <h1>Hi there!</h1>
    //   </div>
    //   {showDiv && 
    //     <div className="app">
    //       <p>Conditionally render div here</p>
    //     </div>}
    //   <Button onClick={toggleAnswer} >{ !showDiv ? 'Show Answer' : 'Hide Answer' }</Button>
    // </> 
    <div>
     <div>{cardWordGroup}</div>
     <Button onClick={toggleAllAnswers}>{ buttonText }</Button>
    </div>
  );
}
//!showDiv.words.prevState ? 'Show Answer' : 'Hide Answer'

export default CardGroup;