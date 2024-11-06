import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import EntryForm from "../components/EntryForm"
import { createEntry } from "../services/EntryService"
import { EntryContext } from "../context/EntryContext"

const CreateEntryPage = () => {
  const { dispatch } = useContext(EntryContext)
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    const success = await createEntry(formData)
    if (success) {
      dispatch({ type: "ADD_ENTRY", payload: formData })
      alert("Entry created successfully!")
      navigate("/")
    } else {
      alert("Failed to create entry.")
      navigate("/")
    }
  }

  return (
    <div>
      <h1>Create New Entry</h1>
      <EntryForm onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateEntryPage
