

export const START_DOING = 'START_DOING'
export const MOVE_TO_DONE = 'MOVE_TO_DONE'

export function startDoing(item){
    return {
        type: START_DOING,
        payload: item
    }
}

export function moveToDone(item){
    return {
        type: MOVE_TO_DONE,
        payload: item
    }
}