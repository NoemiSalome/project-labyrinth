import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import games, { nextStep } from '../reducers/games'

import StartScreen from './StartScreen'

const Game = () => {
    const userName = useSelector(store => store.games.username)
    const actions = useSelector(store => store.games.description)
    const description = useSelector(store => store.games.description.description)

    console.log(actions)

    const dispatch = useDispatch()

    const onNextStep = () => {
        dispatch(games.actions.setDescriptions(description.description))
        dispatch(nextStep(description))
    }

return (
    <>
        <StartScreen />
        <div>
            <p>Description: {description} </p>
        </div>
        {actions.actions.map(action => (
            <div key={action.description}>
                <p>{action.description}</p>
                <button   
                    onClick={() => dispatch(onNextStep(action.direction, userName))}>
                    {action.direction}
                </button>
            </div>
        ))}
    </>

)}


export default Game