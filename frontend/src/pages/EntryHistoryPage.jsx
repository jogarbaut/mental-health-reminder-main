import React, { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography, Stack } from "@mui/material"
import { getEntry, deleteEntry } from "../services/EntryService"
import { EntryContext } from "../context/EntryContext"
import EntryCard from "../components/EntryCard"
import PageHeader from "../components/PageHeader"
import CustomButton from "../components/CustomButton"

const EntryHistoryPage = () => {
  const { state, dispatch } = useContext(EntryContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await getEntry()
      if (data) {
        dispatch({ type: "SET_ENTRY", payload: data })
      }
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
      {/* Page Header */}
      <PageHeader
        title="Entry History"
        subtitle="View how you have been doing or edit an entry"
      />

      {state.entries && state.entries.length > 0 ? (
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%", maxWidth: "600px" }}
        >
          {state.entries.map(
            (entry) =>
              entry && (
                <EntryCard
                  key={entry._id}
                  entry={entry}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )
          )}
        </Stack>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No entries available.
        </Typography>
      )}

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <CustomButton onClick={() => navigate("/")} variant="alternative">
          Home
        </CustomButton>
        <CustomButton
          onClick={() => navigate("/recommendations")}
          variant="secondary"
        >
          Advice
        </CustomButton>
      </Stack>
    </Box>
  )
}

export default EntryHistoryPage
