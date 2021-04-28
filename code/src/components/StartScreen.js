import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import games, { startGame } from '../reducers/games'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onUserNameSet = () => {
        dispatch(games.actions.setUserName(inputValue))
        dispatch(startGame(inputValue))
    }

    return (
        <>
        <p>Welcome to our splendid game! Type your name and start...</p>
            <input 
                type='text'
                placeholder='Enter your name to start'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                required
            />
            <button onClick={onUserNameSet}>Start the game!</button>
        </>
    )
}

export default StartScreen
