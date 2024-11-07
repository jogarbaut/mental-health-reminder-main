import React, { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Paper } from "@mui/material"
import { getEntryById, updateEntry } from "../services/EntryService"
import { EntryContext } from "../context/EntryContext"
import EntryForm from "../components/EntryForm"

const EditEntryPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { dispatch } = useContext(EntryContext)

  const [entry, setEntry] = useState(null)

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const data = await getEntryById(id)
        if (data) {
          setEntry(data)
        } else {
          alert("Entry not found")
          navigate("/history")
        }
      } catch (error) {
        console.error("Failed to fetch entry:", error)
      }
    }

    fetchEntry()
  }, [id, navigate])

  const handleSubmit = async (updatedData) => {
    try {
      const success = await updateEntry(id, updatedData)
      if (success) {
        dispatch({ type: "UPDATE_ENTRY", payload: { id, ...updatedData } })
        alert("Entry updated successfully!")
        navigate("/history")
      } else {
        alert("Failed to update entry.")
      }
    } catch (error) {
      console.error("Error updating entry:", error)
      alert("An error occurred while updating the entry.")
    }
  }

  if (!entry) return null

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Edit Entry
      </Typography>
      <Paper elevation={3} sx={{ width: "100%", maxWidth: "600px", p: 3 }}>
        <EntryForm initialData={entry} onSubmit={handleSubmit} />
      </Paper>
    </Box>
  )
}

export default EditEntryPage
