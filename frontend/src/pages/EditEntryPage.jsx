import React, { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import EntryForm from "../components/EntryForm.jsx"
import { EntryContext } from "../context/EntryContext.jsx"
import { updateEntry, getEntryById } from "../services/EntryService.js"

const EditEntryPage = () => {
  const { id } = useParams()
  const { dispatch } = useContext(EntryContext)
  const [initialData, setInitialData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const data = await getEntryById(id)
        setInitialData(data)
      } catch (error) {
        alert("Failed to load entry data.")
        navigate("/")
      }
    }
    fetchEntry()
  }, [id, navigate])

  const handleSubmit = async (formData) => {
    try {
      const updatedEntry = await updateEntry(id, formData)
      dispatch({ type: "UPDATE_ENTRY", payload: updatedEntry })
      alert("Entry updated successfully!")
      navigate("/")
    } catch (error) {
      alert("Failed to update entry.")
      navigate("/")
    }
  }

  return (
    <div className="edit-workout-page">
      <h1>Edit Entry</h1>
      {initialData ? (
        <EntryForm initialData={initialData} onSubmit={handleSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default EditEntryPage
