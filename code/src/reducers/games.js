import { createSlice } from '@reduxjs/toolkit'

const games = createSlice ({
    name: 'games',
    initialState: {
        username: '',
        description: {
            coordinates: 0.0,
            description: '',
            actions: []
          },
        },
        reducers: {
            setUserName: (store, action) => {
                store.username = action.payload
            },
            setDescriptions: (store, action) => {
                store.description = action.payload
                store.actions = action.payload.actions
            },
        }
})

export const startGame = (userName) => {
    return (dispatch) => {
        const prepare = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: userName })
        }

        fetch('https://wk16-backend.herokuapp.com/start', prepare)
        .then(res => res.json())
        .then(json => dispatch(games.actions.setDescriptions(json)))
}
}

export const nextStep = (userName, direction) => {
    return (dispatch) => {
        const move = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: userName, type: 'move', direction: direction })
        }

        fetch('https://wk16-backend.herokuapp.com/action', move)
        .then(res => res.json())
        .then(json => dispatch(games.actions.setDescriptions(json)))
    }
}

export default games