import React, { useContext, useState, useEffect } from 'react'
import {  LOGIN_USER, CHECK_AUTH } from '../Constants/Constants'
import Context from '../Context/Context'
import { useRequest } from '../Hooks/requst.hooks'

const Auth = () => {
    const auth = useContext(Context)
    const {request} = useRequest()

    const [form, setForm] = useState({
        login: '', password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginUser = async () => {
        try {
            const data = await request('/users')
            auth.login(form, data)
        } catch (e) {
        }
    }
    return (
        <div className="row auth">
            <div className="col offset-m4">
                <div>
                    <h4 className="center"> Авторизация</h4>
                    <div className="row">
                        <form className="col s6 m12">
                            <div className="row">
                                <div className="input-field col s12 m12">
                                    <input
                                        placeholder="Логин"
                                        id="login"
                                        type="text"
                                        name="login"
                                        className="validate"
                                        onChange={changeHandler} />

                                </div>
                                <div class="input-field col s12 m12">
                                    <input
                                        placeholder="Пароль"
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="validate"
                                        onChange={changeHandler} />
                                </div>
                            </div>
                        </form>

                    </div>
                    <button className="btn waves-effect purple darken-2 center" type="submit" name="action" onClick={loginUser}>Войти
    <i className="fa fa-sign-in right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth