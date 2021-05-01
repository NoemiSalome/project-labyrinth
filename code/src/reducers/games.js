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
          loading: false
        },
        reducers: {
            setUserName: (store, action) => {
                store.username = action.payload
            },
            setDescriptions: (store, action) => {
                store.description = action.payload
                store.actions = action.payload.actions
            },
            setLoading: (store, action) => {
                store.loading = action.payload
            }

        }
})

export const startGame = (userName) => {
    return (dispatch) => {
        dispatch(games.actions.setLoading(true))
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
        .finally(() => dispatch(games.actions.setLoading(false)))
}
}

export const nextStep = (userName, direction) => {
    return (dispatch) => {
        dispatch(games.actions.setLoading(true))
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
        .finally(() => dispatch(games.actions.setLoading(false)))
    }
}

export default games