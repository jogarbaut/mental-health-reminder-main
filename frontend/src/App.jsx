import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Box, Container, Typography } from "@mui/material"
import EditEntryPage from "./pages/EditEntryPage.jsx"
import CreateEntryPage from "./pages/CreateEntryPage.jsx"
import { EntryProvider } from "./context/EntryContext.jsx"
import Navigation from "./components/Navigation.jsx"
import HomePage from "./pages/HomePage.jsx"
import EntryHistoryPage from "./pages/EntryHistoryPage.jsx"

const App = () => {
  return (
    <EntryProvider>
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "80vh",
          }}
        >
          {/* Navigation */}
          <header>
            <Navigation />
          </header>

          {/* Main Content Area */}
          <Container
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: 2, sm: 3, md: 4 },
              maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/edit/:id" element={<EditEntryPage />} />
              <Route path="/create" element={<CreateEntryPage />} />
              <Route path="/history" element={<EntryHistoryPage />} />
            </Routes>
          </Container>

          {/* Footer */}
          <footer>
            <Box
              sx={{
                py: 2,
                mt: "auto",
                bgcolor: "#f44336",
                color: "white",
                textAlign: "center",
              }}
            >
              <Typography variant="body2" component="p">
                © {new Date().getFullYear()} Jomel Bautista
              </Typography>
            </Box>
          </footer>
        </Box>
      </Router>
    </EntryProvider>
  )
}

export default App
