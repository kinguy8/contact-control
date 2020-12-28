import React from 'react'
import Contact from './Contact'

const ContactList = ({ data, deleteContact }) => {
  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th>Id</th>
          <th>Имя</th>
          <th>Контакт</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item, index) => {
        return (
          <Contact
            item={item}
            key={index}
            deleteContact={deleteContact}
          />
        );
      })}
    </tbody>
    </table>

  )
}

export default ContactList