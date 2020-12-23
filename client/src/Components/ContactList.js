import React from 'react'
import Contact from './Contact'

const ContactList = ({ data, deleteContact }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Имя</th>
          <th>Контакт</th>
          <th>Действия</th>
        </tr>
      </thead>

      {data.map((item, index) => {
        return (
          <Contact
            item={item}
            key={index}
            deleteContact={deleteContact}
          />
        );
      })}

    </table>

  )
}

export default ContactList