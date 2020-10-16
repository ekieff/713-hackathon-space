import React, {useEffect} from 'react'


function RightAnswer(props){
    useEffect(() =>{
        setTimeout(() =>props.history.push('/question'), (5000))
    })
    return(
        <div>
            <h1>That was right!</h1>
        </div>
    )
}

export default RightAnswer