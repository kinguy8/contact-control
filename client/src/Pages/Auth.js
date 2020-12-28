import React, { useContext, useState } from 'react'
import { ALERT_CLEAR } from '../Constants/Constants'
import Alert from '../Components/Alert'
import Context from '../Context/Context'
import { useRequest } from '../Hooks/requst.hooks'

const Auth = () => {
    const auth = useContext(Context)
    const { request } = useRequest()

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

    const clearAlert = () => {
        auth.setState({
            type: ALERT_CLEAR
        })
    }

    return (
        <div className="row auth" style={{ marginTop: '25vh' }}>
            <div className="col-md-3 mx-auto">
                <div className="myform form ">
                    {!auth.person.isAuth ? <Alert state={auth.person} clearAlert={clearAlert} /> : null}
                    <div className="logo mb-3">
                        <div className="col-md-12 text-center">
                            <h1>Авторизация</h1>
                        </div>
                    </div>
                    <div className="row">
                        <form className="col s6 m12">
                            <div className="row">
                                <div className="form-group">
                                    <input
                                        placeholder="Логин"
                                        id="login"
                                        type="text"
                                        name="login"
                                        className="form-control"
                                        onChange={changeHandler} />

                                </div>
                                <div class="form-group" style={{ marginTop: '1vh' }}>
                                    <input
                                        placeholder="Пароль"
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        onChange={changeHandler} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div style={{ marginTop: '2vh' }}>
                        <button className="btn btn-outline-primary" type="submit" name="action" onClick={loginUser}>Войти
<i className="fa fa-sign-in right"></i>
                        </button></div>
                </div>
            </div>
        </div>
    )
}

export default Auth