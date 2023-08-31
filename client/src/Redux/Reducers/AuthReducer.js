import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const initialState={
    user : {},
    errors : []
}

const AuthReducer=(state = initialState,action)=>{
    switch (action.type) {
        case REGISTER : 
        localStorage.setItem('token',action.payload.token)
        return {...state,user : action.payload.newUser,errors : null}

        case LOGIN :
        localStorage.setItem('token', action.payload.token)
        return {...state,user : action.payload.found , errors : null}

        case CURRENT : return {...state, user : action.payload}

        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state, user : null, errors: null}
        case FAIL : return {...state,errors : action.payload, user : null}
        default: return state
    }
}

export default AuthReducer