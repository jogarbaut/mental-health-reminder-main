import React, { useState, useEffect } from "react"
import { Box, Typography, TextField, Button, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import MoodBox from "../components/MoodBox"

// Define the moods with colors and helper text
const moods = [
  { label: "Happy", color: "#A3D6A7", helperText: "Positive, Joyful, Content" },
  { label: "Calm", color: "#A7C6ED", helperText: "Relaxed, At Peace" },
  {
    label: "Stressed",
    color: "#F4E285",
    helperText: "Overwhelmed, Anxious, Under Pressure",
  },
  { label: "Sad", color: "#F28B82", helperText: "Down, Discouraged, Upset" },
]

const EntryForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    mood: "",
    note: "",
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleMoodSelect = (mood) => {
    setFormData((prev) => ({ ...prev, mood }))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Step 1 Instruction */}
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2, mb: 3 }}>
        Step 1. Select which mood describes you best
      </Typography>

      {/* Mood Selection 2x2 Layout */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mb: 3,
        }}
      >
        {moods.map((mood) => (
          <MoodBox
            key={mood.label}
            label={mood.label}
            color={mood.color}
            helperText={mood.helperText}
            isSelected={formData.mood === mood.label}
            onSelect={handleMoodSelect}
          />
        ))}
      </Box>

      {/* Step 2 Instruction */}
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2, mb: 3 }}>
        Step 2. Enter opitional notes about why you are feeling {formData.mood}
      </Typography>

      {/* Notes Text Field (Optional) */}
      <TextField
        label="Note"
        name="note"
        value={formData.note}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ maxWidth: "500px", mb: 3 }}
      />

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        {/* Submit Button - Enabled only if mood is selected */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!formData.mood} // Disable if no mood is selected
        >
          Submit
        </Button>

        {/* Home Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#D3A3B5",
            color: "white",
            "&:hover": {
              backgroundColor: "#B283A2",
            },
          }}
        >
          Home
        </Button>
      </Stack>
    </Box>
  )
}

export default EntryForm
