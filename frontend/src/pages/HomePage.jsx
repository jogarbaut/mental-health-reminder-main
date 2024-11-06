import React, { useEffect, useContext } from "react"
import EntryTable from "../components/EntryTable"
import { getEntry, deleteEntry } from "../services/EntryService"
import { EntryContext } from "../context/EntryContext"
import { useNavigate } from "react-router-dom"


const HomePage = () => {
  const { state, dispatch } = useContext(EntryContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEntry = async () => {
      const data = await getEntry()
      dispatch({ type: "SET_ENTRY", payload: data })
    }
    fetchEntry()
  }, [dispatch])

  const handleDelete = async (id) => {
    const success = await deleteEntry(id)
    if (success) {
      dispatch({ type: "DELETE_ENTRY", payload: id })
    }
    navigate("/")
    alert("Entry deleted!")
  }

  return (
    <div>
      <h1>Mood Tracker</h1>
      <button onClick={() => navigate("/create")}>Add Entry</button>
      <EntryTable entries={state.entries} onDelete={handleDelete} />
    </div>
  )
}

export default HomePage
