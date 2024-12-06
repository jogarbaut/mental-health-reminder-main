import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button, Box } from "@mui/material"
import { themeService } from "../services/ThemeService"

const Navigation = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const initializeTheme = async () => {
      const currentTheme = await themeService.getTheme()
      setTheme(currentTheme)
    }
    initializeTheme()
  }, [])

  const handleToggleTheme = async () => {
    const response = await themeService.toggleTheme()
    setTheme(response.theme)
  }

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/create" color="inherit">
            Create
          </Button>
        </Box>
        <Button onClick={handleToggleTheme} color="inherit">
          Toggle Theme
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
