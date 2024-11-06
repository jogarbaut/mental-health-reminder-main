import React, { createContext, useReducer } from "react"
import { EntryReducer } from "../reducers/EntryReducers"

export const EntryContext = createContext()

const initialState = {
  entries: [],
}

export const EntryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EntryReducer, initialState)

  return (
    <EntryContext.Provider value={{ state, dispatch }}>
      {children}
    </EntryContext.Provider>
  )
}
