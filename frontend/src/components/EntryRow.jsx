import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"


const EntryRow = ({ entry, onDelete }) => {
  const navigate = useNavigate()

  return (
    <tr>
      <td>{entry.mood}</td>
      <td>{entry.note}</td>
      <td>
        <FaEdit onClick={() => navigate(`/edit/${entry._id}`)} />
        <FaTrash onClick={() => onDelete(entry._id)} />
      </td>
    </tr>
  )
}

export default EntryRow