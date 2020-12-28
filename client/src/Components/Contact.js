import React from 'react'

function Contact({ item, deleteContact }) {
  return (
    <tr>
      <td><label>
        <input type="checkbox" />
        <span></span>
      </label></td>
      <td>{item.name}</td>
      <td>{item.number}</td>
      <td> <button type="button" onClick={() => deleteContact(item.id)}
        className="btn btn-outline-danger btn-sm">&times;
      </button></td>
    </tr>

  )
}

export default Contact