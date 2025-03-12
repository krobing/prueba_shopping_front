import { useReducerCtx } from '@/hooks/createReducerCtx'
import { ActionShape, StateShape, CartContext } from '../context/CartState'

export const useReducerCart = (): [StateShape, React.Dispatch<ActionShape>] =>
  useReducerCtx<StateShape, ActionShape>(CartContext)
