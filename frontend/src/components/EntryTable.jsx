import React from 'react'
import EntryRow from './EntryRow'

const EntryTable = ({ entries, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Mood</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <EntryRow
            key={entry._id}
            entry={entry}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  )
}

export default EntryTable