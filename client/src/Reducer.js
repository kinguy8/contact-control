import { FETCH_DATA, LOGIN_USER, CHECK_AUTH, DELETE_DATA, ADD_DATA, FIND_CONTACT, ALERT_CLEAR } from './Constants/Constants'

function Reducer(state, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                data: action.payload,
                status: "Дата получена",
                loading: true,
                alert: false
            }
        case LOGIN_USER:
            const { login, password } = action.userData
            const result = action.payload.filter(user => user.login === login && user.password === password)
            return ({
                msg: result.length ? "Успешно вошли в систему" : "Неверные данные",
                name: result.length ? result[0].name : "",
                isAuth: result.length ? true : false,
                login: result.length ? result[0].login : "",
                alert: true,
                alertStyle: result.length ? "alert alert-success" : "alert alert-danger",
                visibility: "block"
            })
        case CHECK_AUTH:
            const authUser = action.userData
            const checkAuth = action.payload.filter(user => user.login === authUser)
            return ({
                isAuth: checkAuth.length ? true : false,
                loading: false,
                login: authUser
            })
        case DELETE_DATA:
            return {
                data: state.data.filter(contact => contact.id !== action.payload),
                alert: true,
                msg: state.data.length ? 'Контакт удален' : 'Список пуст',
                alertStyle: state.data.length ? "alert alert-warning" : "alert alert-danger"
            }
        case ADD_DATA:
            return ({
                loading: false,
                data: [...state.data, action.payload],
                msg: "Контакт успешно добавлен",
                alert: true,
                visibility: 'block',
                alertStyle: "alert alert-success"
            })
        case FIND_CONTACT:
            const findedContact = action.payload.filter(contact => contact.name.includes(action.contact))
            return ({
                data: action.contact !== "" ? findedContact : action.payload,
                loading: false
            })
        case ALERT_CLEAR:
            return ({
                ...state,
                alert: false,
                visibility: 'none'
            })
        default:
            return state
    }
}

export default Reducer