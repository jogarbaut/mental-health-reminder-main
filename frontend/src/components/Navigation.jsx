import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button, Box } from "@mui/material"

const Navigation = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/create" color="inherit">
            Create
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
