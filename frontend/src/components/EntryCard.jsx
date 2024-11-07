import React from "react"
import { Box, Typography } from "@mui/material"

// Color map for each mood
const moodColors = {
  Happy: "#A3D6A7", // Green for Happy
  Calm: "#A7C6ED", // Blue for Calm
  Stressed: "#F4E285", // Yellow for Stressed
  Sad: "#F28B82", // Red for Sad
}

const EntryCard = ({ entry }) => {
  const { mood, note } = entry
  const backgroundColor = moodColors[mood] || "#E0E0E0" // Default color if mood doesn't match

  return (
    <Box
      sx={{
        width: 200,
        padding: 2,
        borderRadius: 2,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
        backgroundColor: backgroundColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        {mood}
      </Typography>
      <Typography variant="body2" color="textSecondary" mt={1}>
        {note || "No additional notes"}
      </Typography>
    </Box>
  )
}

export default EntryCard
