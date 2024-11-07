import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import EntryForm from "../components/EntryForm"
import { createEntry } from "../services/EntryService"
import { EntryContext } from "../context/EntryContext"
import { Box } from "@mui/material"
import PageHeader from "../components/PageHeader"

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <PageHeader title="Log Mood" subtitle="How are you feeling right now?" />
      <EntryForm onSubmit={handleSubmit} />
    </Box>
  )
}

export default CreateEntryPage
