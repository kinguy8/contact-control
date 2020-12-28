import React from 'react'

const ContactSearch = ({ findContactHandler }) => {
  
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" name="find" placeholder="Найти по имени" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={findContactHandler} />
      <button className="btn btn-info" type="button" id="button-addon2">Поиск</button>
    </div>
  )
}

export default ContactSearch