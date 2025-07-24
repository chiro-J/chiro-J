import type {Action} from 'redux'
import type { UUID } from '../commonTypes'
export * from '../commonTypes'


export type State = UUID[]

export type SetListidOrders = Action<'@listidOrders/set'> & {
    payload: 
}

export type AddListidToOrders = Action<'@listidOrders/add'> & {
    payload: 
}

export type RemoveListidFromOrders = Action<'@listidOrders/remove'> & {
    payload: 
}


export type Actions = SetListidOrders | AddListidToOrders | RemoveListidFromOrders

