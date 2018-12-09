import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{
    
    handleClick(buttonText){
        if(buttonText ===  this.props.quiz_question.answer){
            this.props.showNextQuestionHandler()
        }
    }

    render(){
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {/* <li>{this.props.quiz_question.answer_options[0]}</li> */}
                        {/* <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}></QuizQuestionButton> */}
                        {
                            this.props.quiz_question.answer_options.map((answer_option,index)=>{
                                return <QuizQuestionButton key={index} button_text={answer_option}
                                        clickHandler={this.handleClick.bind(this)}></QuizQuestionButton>
                            })
                        }
                    </ul>
                </section>
            </main>
        );
    }
}



export default QuizQuestion