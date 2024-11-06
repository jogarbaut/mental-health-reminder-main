const API_URL = "http://localhost:3000/entry"

export const getEntry = async () => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error("Failed to fetch entries")
  }
  return await response.json()
}

export const getEntryById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch entry with ID: ${id}`)
  }
  return await response.json()
}

export const createEntry = async (entryData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entryData),
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error("Failed to create entry", error)
    return false
  }
}

export const updateEntry = async (id, entryData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entryData),
  })
  if (response.status !== 200) {
    throw new Error("Failed to update entry")
  }
  return await response.json()
}

export const deleteEntry = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" })
  if (response.status !== 200) {
    console.log(response.status)
    throw new Error("Failed to delete entry")
  }
  return await response.json()
}
