import React, { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography, Paper, IconButton, Stack } from "@mui/material"
import { Edit, Delete } from "@mui/icons-material"
import { EntryContext } from "../context/EntryContext"
import { getEntry, deleteEntry } from "../services/EntryService"

const EntryHistoryPage = () => {
  const { state, dispatch } = useContext(EntryContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await getEntry()
      dispatch({ type: "SET_ENTRY", payload: data })
    }
    fetchEntries()
  }, [dispatch])

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }

  const handleDelete = async (id) => {
    const success = await deleteEntry(id)
    if (success) {
      dispatch({ type: "DELETE_ENTRY", payload: id })
      alert("Entry deleted!")
    }
  }

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
        Entry History
      </Typography>

      {state.entries.length > 0 ? (
        <Stack spacing={2} sx={{ width: "100%", maxWidth: "600px" }}>
          {state.entries.map((entry) => (
            <Paper
              key={entry._id}
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                borderRadius: 2,
                backgroundColor:
                  {
                    Happy: "#A3D6A7",
                    Calm: "#A7C6ED",
                    Stressed: "#F4E285",
                    Sad: "#F28B82",
                  }[entry.mood] || "#E0E0E0",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {entry.mood}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {entry.note || "No additional notes"}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  color="primary"
                  onClick={() => handleEdit(entry._id)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(entry._id)}
                >
                  <Delete />
                </IconButton>
              </Box>
            </Paper>
          ))}
        </Stack>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No entries available.
        </Typography>
      )}
    </Box>
  )
}

export default EntryHistoryPage
