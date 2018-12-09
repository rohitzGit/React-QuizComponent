import React, { Component } from 'react'
import Quiz from './Quiz.js'
import './App.css'

// let quizData = require('./quiz_data.json')

// class Quiz extends Component{
//     constructor(props){
//         super(props)
//         this.state = {quiz_position: 1}
//     }
//     render(){
//         return(
//             <div>
//                 <div className="QuizQuestion">
//                     {quizData.quiz_questions[0].instruction_text}
//                 </div>
//             </div>
//         )
//     }
// }

class App extends Component {
  render() {
    return (
      <Quiz></Quiz>
    )
  }
}

export default App