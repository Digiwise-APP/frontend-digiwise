type Answer = string

const formatOptionResponse = (answer: Answer) : string[] => {
    return answer.split(" | ")
   
}

export default formatOptionResponse