import React, { useState, useEffect } from "react"

const EntryForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    mood: "",
    note: "",
  })

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="mood"
          value={formData.mood}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Note:
        <input
          type="text"
          name="note"
          value={formData.note}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  )
}

export default EntryForm
