import React from "react"
import { Box, Typography } from "@mui/material"

const MoodBox = ({ label, color, helperText, isSelected, onSelect }) => {
  return (
    <Box
      onClick={() => onSelect(label)}
      sx={{
        width: 180,
        height: 100,
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: 8,
        boxShadow: isSelected
          ? "0px 4px 10px rgba(0, 0, 0, 0.3)"
          : "0px 4px 8px rgba(0, 0, 0, 0.15)",
        border: isSelected ? "3px solid black" : "none",
        textAlign: "center",
        padding: 10, 
        transition: "transform 0.2s, box-shadow 0.2s", 
        "&:hover": {
          transform: "scale(1.05)", 
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", 
        },
      }}
    >
      <Typography variant="h5" color="textPrimary" fontWeight="bold">
        {label}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        fontStyle="italic"
        sx={{ mt: 1 }}
      >
        {helperText}
      </Typography>
    </Box>
  )
}

export default MoodBox
