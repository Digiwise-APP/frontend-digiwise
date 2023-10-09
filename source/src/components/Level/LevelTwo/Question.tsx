import React from 'react'

type QuestionProps =  {
    question: string
    imageOptionOne: string,
    imageOptionTwo : string

}

const Question: React.FC<QuestionProps> = ({question, imageOptionOne, imageOptionTwo}) => {
  return (
    <div>Question</div>
  )
}

export default Question