import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EditEntryPage from "./pages/EditEntryPage.jsx"
import CreateEntryPage from "./pages/CreateEntryPage.jsx"
import { EntryProvider } from "./context/EntryContext.jsx"
import Navigation from "./components/Navigation.jsx"
import HomePage from "./pages/HomePage.jsx"

const App = () => {
  return (
    <EntryProvider>
      <Router>
        <header>
          <h1>Mood Tracker</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/edit/:id" element={<EditEntryPage />} />
            <Route path="/create" element={<CreateEntryPage />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 Jomel Bautista</p>
        </footer>
      </Router>
    </EntryProvider>
  )
}

export default App
