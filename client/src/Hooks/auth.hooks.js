import React, { useCallback, useEffect, useReducer } from 'react' 
import Reducer from '../Reducer'
import { useRequest } from './requst.hooks'
import { CHECK_AUTH, LOGIN_USER, personState } from '../Constants/Constants'

export const useAuth = () => {
    const [person, setState] = useReducer(Reducer, personState)
    const {request} = useRequest()

    const login = useCallback((form, data) =>{
        setTimeout(() => {
            setState({
                type: LOGIN_USER,
                userData: form,
                payload: data,
            })
        })
    }, [])

    const authUser = useCallback(async (authData) => {
        try {
            const data = await request('/users')
            setState({
                type: CHECK_AUTH,
                payload: data,
                userData: authData
            })
        } catch (e) {
        }
    }, [])

    useEffect(() => {
        if (person.isAuth)
        {
            localStorage.setItem("userData", person.login)
        }
    }, [person])

    

    return { authUser, login, person, setState }
}