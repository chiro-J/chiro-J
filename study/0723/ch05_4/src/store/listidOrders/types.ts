// todo
import type { Action } from "redux";
import type { UUID } from "../commonTypes";
export * from '../commonTypes'

export type State = UUID[]

export type SetListidOrders = Action<'@listidOrders/set'> & {
    payload: State
}

export type AddListidToOrders = Action<'@listidOrders/add'> & {
    payload: State
}

export type RemoveListidFromOrders = Action<'@listidOrders/remove'> & {
    payload: State
}


export type Actions = SetListidOrders | AddListidToOrders | RemoveListidFromOrders