import React, {useState} from 'react'

const ContactSearch = ({data, findContact}) =>{
    const [contact, setContact] = useState()

    const changeHandler = event => {
        setContact({[event.target.name]: event.target.value})
    }


    return(
        <form action="#">
    <div class="file-field input-field">
      <div class="input-field col s10">
        <input type="text" name="find" class="validate" placeholder="Поиск по имени" onChange={changeHandler}/>
      </div>
      <button type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => findContact(contact)}>Найти
      </button>
    </div>
  </form>
    )
}

export default ContactSearch