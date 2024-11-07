import React, { useState } from "react"
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material"
import { Edit, Delete } from "@mui/icons-material"
import { format } from "date-fns"

const EntryCard = ({ entry, onEdit, onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false)

  if (!entry) return null

  // Define mood colors
  const moodColors = {
    Happy: "#A3D6A7",
    Calm: "#A7C6ED",
    Stressed: "#F4E285",
    Sad: "#F28B82",
  }

  const formattedUpdatedAt = entry.updatedAt
    ? format(new Date(entry.updatedAt), "MM dd, yy")
    : "Unknown date"

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleConfirmDelete = () => {
    onDelete(entry._id)
    handleCloseDialog()
  }

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        mb: 2,
        borderRadius: 2,
        backgroundColor: moodColors[entry.mood] || "#E0E0E0",
      }}
    >
      {/* Entry Information */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Display Updated Date */}
        <Typography variant="caption" color="textSecondary">
          Last Updated: {formattedUpdatedAt}
        </Typography>

        {/* Display Mood */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
          {entry.mood}
        </Typography>

        {/* Display Note */}
        <Typography variant="body2" color="textSecondary">
          {entry.note || "No additional notes"}
        </Typography>
      </Box>

      {/* Edit and Delete Icons */}
      <Box>
        <IconButton color="primary" onClick={() => onEdit(entry._id)}>
          <Edit />
        </IconButton>
        <IconButton color="error" onClick={handleOpenDialog}>
          <Delete />
        </IconButton>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete this entry? This action
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  )
}

export default EntryCard
