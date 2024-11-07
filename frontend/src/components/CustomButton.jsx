import React from "react"
import { Button } from "@mui/material"

const CustomButton = ({ onClick, variant = "primary", children }) => {
  // Set colors based on the variant prop
  const getColorStyles = () => {
    switch (variant) {
      case "primary":
        return {
          textColor: "#FFFFFF",
          backgroundColor: "#D3A3B5",
          hoverColor: "#B283A2",
        }
      case "secondary":
        return {
          textColor: "#FFFFFF",
          backgroundColor: "#A3D6A7",
          hoverColor: "#8FBF92",
        }
      case "alternative":
        return {
          textColor: "#FFFFFF",
          backgroundColor: "#F3D5A7",
          hoverColor: "#E2C38D",
        }
      default:
        return {
          textColor: "#FFFFFF",
          backgroundColor: "#D3A3B5",
          hoverColor: "#B283A2",
        }
    }
  }

  const { textColor, backgroundColor, hoverColor } = getColorStyles()

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        "&:hover": {
          backgroundColor: hoverColor,
        },
      }}
    >
      {children}
    </Button>
  )
}

export default CustomButton
