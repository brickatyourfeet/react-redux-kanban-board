import { combineReducers } from 'redux'
import { START_DOING } from '../actions'

const INITIAL_STATE = [
    { task: 'a task' },
    { task: 'another task'},
    { task: 'a serious thing to do'}
]

function todo(state = INITIAL_STATE, action){
    switch(action.type){
        case START_DOING:
            return state.map((e)=> ({...e}))
                        .filter((e)=> e.task !== action.payload.task)
        default:
            return state
    }
}

function doing(state = [], action){
    switch(action.type){
        case START_DOING: //makes a copy so there is no reference pointers left
            return [...state.map((e)=> ({...e})), action.payload]
        default:   //redux is immutable, always want to make a brand new copy
            return state
    }
}

function done(state = [], action){
    switch(action.type){
        default:
            return state
    }
}



export default combineReducers(
    {
        todo,
        doing,
        done
    }
)