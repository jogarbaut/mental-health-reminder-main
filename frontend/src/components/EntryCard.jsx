import React from "react"
import { Box, Typography, IconButton, Paper } from "@mui/material"
import { Edit, Delete } from "@mui/icons-material"
import { format } from "date-fns"

const EntryCard = ({ entry, onEdit, onDelete }) => {
  if (!entry) return null

  const moodColors = {
    Happy: "#A3D6A7",
    Calm: "#A7C6ED",
    Stressed: "#F4E285",
    Sad: "#F28B82",
  }

  // Format updatedAt date using date-fns
  const formattedUpdatedAt = entry.updatedAt
    ? format(new Date(entry.updatedAt), "M-d-yy")
    : "Unknown date"

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
          {entry.note || ""}
        </Typography>
      </Box>

      {/* Edit and Delete Icons */}
      <Box>
        <IconButton color="primary" onClick={() => onEdit(entry._id)}>
          <Edit />
        </IconButton>
        <IconButton color="error" onClick={() => onDelete(entry._id)}>
          <Delete />
        </IconButton>
      </Box>
    </Paper>
  )
}

export default EntryCard
