import React, { useEffect, useState, useReducer } from 'react'
import { useRequest } from '../Hooks/requst.hooks'
import { FETCH_DATA, DELETE_DATA, ADD_DATA, contactState, FIND_CONTACT } from '../Constants/Constants'
import Reducer from '../Reducer'
import ContactList from '../Components/ContactList'
import ContactSearch from '../Components/ContactSearch'

const Contacts = () => {
    const [state, dispatch] = useReducer(Reducer, contactState)

    const { request } = useRequest()

    const [contact, setContact] = useState({
        name: '', number: ''
    })

    const changeHandler = event => {
        setContact({ ...contact, [event.target.name]: event.target.value })
    }

    useEffect(async () => {
        const data = await request('/contacts')
        setTimeout(() => {
            dispatch({
                type: FETCH_DATA,
                payload: data
            })
        })

    }, [])

    async function deleteContact(id) {
        const data = await request(`/contacts/${id}`, 'DELETE')
        if (data) {
            dispatch({
                type: DELETE_DATA,
                payload: id
            })
        }
    }

    async function addContact(newItem) {
        const data = await request('/contacts', 'POST', newItem, {'Content-Type': 'application/json'})
        if (data) {
            dispatch({
                type: ADD_DATA,
                payload: newItem
            })
        }
    }

    const findContact = (data) =>{
        console.log("clicked", data)
        dispatch({
            type: FIND_CONTACT,
            payload: state.data,
            contact: data
        })
    }
    useEffect(()=>{
        setTimeout(()=>{
            dispatch({
                type:"RESET_STATE"
            })
        },4000)
    },[state])

    return (

        <div class="row">
            <div class="col s4">
                <form class="col s12 addContact">
                <h1>Контакты</h1>
                    <div class="m5 row centered">
                        <div class="input-field col s8">
                            <input placeholder="Имя"
                            id="name"
                            type="text" 
                            class="validate"
                            name="name"
                            onChange={changeHandler} />
                        </div>
                    </div>
                    <div class="row centered">
                        <div class="input-field col s8">
                            <input placeholder="Номер"
                             id="number"
                             type="text"
                             class="validate"
                             name="number"
                             onChange={changeHandler} />   
                        </div>
                    </div>
                    <div class="row">
                    <button type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => addContact(contact)}>Добавить
      </button>
                    </div>
                </form>
            </div>

            <div class="col s8">
                <h1>Контакты</h1>
                {state.data.length ? (
                    <div>
                    <ContactSearch
                    data={state.data}
                    findContact={findContact}
                    />
                    <ContactList
                    data={state.data}
                    deleteContact={deleteContact} />
                    </div>
                ) : <h3>{state.msg}</h3>}

            </div>

        </div>

    )
}

export default Contacts