import React, {useEffect} from 'react'

function WrongAnswer(props){
    useEffect(() =>{
        setTimeout(() =>props.history.push('/question'), (5000))
    })
    return(
        <div>
            <h1>That was wrong!</h1>
        </div>
    )
}

export default WrongAnswer