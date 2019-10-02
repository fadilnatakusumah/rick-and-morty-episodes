
export interface IState {
    episodes: Array<any>,
    favorites: Array<any>
}

export interface IAction {
    type: string,
    payload: any
}