import React, { useEffect, useContext } from "react"
import { getEntry } from "../services/EntryService"
import { EntryContext } from "../context/EntryContext"
import { useNavigate } from "react-router-dom"
import {
  Box,
  Typography,
  Stack,
  Button,
  Divider,
  Paper,
  Alert,
} from "@mui/material"

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

  // Get the last 7 entries or as many as are available
  const lastEntries = state.entries.slice(-7).reverse() // Reverse to show most recent first

  // Check if the user has logged an entry in the last 12 hours, or if there are no entries at all
  const lastEntryTime = state.entries.length
    ? new Date(state.entries[state.entries.length - 1].date)
    : null
  const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000)
  const shouldShowReminder = !lastEntryTime || lastEntryTime < twelveHoursAgo

  const handleNavigateToHistory = () => {
    navigate("/history")
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
      {/* Main Title and Subtitle */}
      <Typography variant="h3" fontWeight="bold">
        Your Mood Matters
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        align="center"
        sx={{ mt: 1, mb: 2, maxWidth: "600px" }}
      >
        Why track your mood? Regular mood logging helps you identify patterns
        and triggers, making it easier to improve your well-being over time.
      </Typography>
      <Divider sx={{ width: "60%", my: 2 }} />

      {/* Log Section Title */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
        Log
      </Typography>

      {/* Mood Log Circles with Mood Titles */}
      <Paper
        elevation={3}
        onClick={handleNavigateToHistory} // Navigate to history page when the box or circles are clicked
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          p: 2,
          borderRadius: 3,
          mt: 1,
          mb: 2,
          maxWidth: "500px",
          cursor: "pointer",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        {lastEntries.length > 0 ? (
          lastEntries.map((entry) => (
            <Box
              key={entry._id}
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor:
                  {
                    Happy: "#A3D6A7",
                    Calm: "#A7C6ED",
                    Stressed: "#F4E285",
                    Sad: "#F28B82",
                  }[entry.mood] || "#E0E0E0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                color="textPrimary"
                fontWeight="bold"
              >
                {entry.mood}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No entries available
          </Typography>
        )}
      </Paper>

      {/* Reminder Alert */}
      {shouldShowReminder && (
        <Alert severity="warning" sx={{ maxWidth: "500px", mb: 3 }}>
          You haven’t logged your mood in the last 12 hours. Please take a
          moment to record how you're feeling.
        </Alert>
      )}

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button
          variant="contained"
          onClick={() => navigate("/create")}
          sx={{
            backgroundColor: "#D3A3B5",
            color: "black",
            "&:hover": { backgroundColor: "#B283A2" },
          }}
        >
          Log Mood
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/recommendations")}
          sx={{
            backgroundColor: "#A3D6A7",
            color: "black",
            "&:hover": { backgroundColor: "#8FBF92" },
          }}
        >
          Advice
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/history")}
          sx={{
            backgroundColor: "#F3D5A7",
            color: "black",
            "&:hover": { backgroundColor: "#E2C38D" },
          }}
        >
          History
        </Button>
      </Stack>
    </Box>
  )
}

export default HomePage
