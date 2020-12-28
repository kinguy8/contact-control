import React, { useEffect, useState, useReducer } from 'react'
import { useRequest } from '../Hooks/requst.hooks'
import { FETCH_DATA, DELETE_DATA, ADD_DATA, contactState, FIND_CONTACT, ALERT_CLEAR } from '../Constants/Constants'
import Reducer from '../Reducer'
import ContactList from '../Components/ContactList'
import ContactSearch from '../Components/ContactSearch'
import Alert from '../Components/Alert'

const Contacts = () => {
    const [state, dispatch] = useReducer(Reducer, contactState)

    const { request } = useRequest()

    const [contact, setContact] = useState({
        name: '', number: ''
    })

    const changeHandler = event => {
        setContact({ ...contact, [event.target.name]: event.target.value })
    }

    const findContactHandler = async (event) => {
        const data = await request('/contacts')
        dispatch({
            type: FIND_CONTACT,
            payload: !event.target.value ? data : state.data,
            contact: event.target.value
        })
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

    const deleteContact = async(id) =>{
        const data = await request(`/contacts/${id}`, 'DELETE')
        if (data) {
            dispatch({
                type: DELETE_DATA,
                payload: id
            })
        }
    }

    const addContact = async (newItem) =>{
        const contact = {
            "id": state.data.length === 0 ? state.data.length + 1 : state.data.length + 1,
            "name": newItem.name,
            "number": newItem.number
          }
        const data = await request('/contacts', 'POST', contact, { 'Content-Type': 'application/json' })
        if (data) {
            dispatch({
                type: ADD_DATA,
                payload: contact
            })
        }
    }

    const clearAlert = () =>{
        dispatch({
            type: ALERT_CLEAR
        })
    }

    return (
        <div id="app" class="container-fluid">
            
            <div id="panel" class="bg-light sidebar">
                <form class="col s12 addContact">
                    <h1>Контакты</h1>
                    <div class="mb-3">
                        <input type="email"
                            placeholder="Имя"
                            class="form-control"
                            id="nameContact"
                            name="name"
                            aria-describedby="emailHelp"
                            onChange={changeHandler}
                        />
                    </div>
                    <div class="mb-3">
                        <input type="text"
                            placeholder="Номер"
                            class="form-control"
                            id="number"
                            name="number"
                            onChange={changeHandler}
                        />
                    </div>
                    <button type="button"
                        className="btn btn-outline-primary"
                        onClick={() => addContact(contact)}>Добавить</button>
                </form>
            </div>
            <div id="site" class="content">
                <h2>Контакты</h2>
                {state.msg ? <Alert state={state} clearAlert={clearAlert}/> : null}
                {state.data.length ? (
                    <div>
                        <ContactSearch
                            findContactHandler={findContactHandler}
                        />
                        <ContactList
                            data={state.data}
                            deleteContact={deleteContact} />
                    </div>
                ) : <h1>Список пуст</h1>}
            </div>
        </div>


    )
}

export default Contacts