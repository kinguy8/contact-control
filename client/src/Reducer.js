import { FETCH_DATA, LOGIN_USER, CHECK_AUTH, DELETE_DATA, ADD_DATA, FIND_CONTACT } from './Constants/Constants'

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
                login: result.length ? result[0].login : ""
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
                ...state,
                data: state.data.filter(contact => contact.id !== action.payload),
                alert: true,
                msg: 'Контакт удален'
            }
        case ADD_DATA:
            return ({
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                msg: "Контакт успешно добавлен",
                alert: true
            })
        case FIND_CONTACT:
            const findedContact = action.payload.filter(contact => contact.name == action.contact.find)
            return ({
                data: findedContact,
                loading: false,
                msg: findedContact.length ? "Контакт найден" : "Контакт не найден"
            })
        default:
            return state
    }
}

export default Reducer