import { useReducer } from "react"
import { types } from "../types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"


const init = () => {
    const user = JSON.parse( localStorage.getItem('userHeroes') ) 
    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( authReducer, {}, init )


    const login = ( name = '' ) => {
        const user = { id: 'ABC', name }
        
        localStorage.setItem('userHeroes', JSON.stringify(user))
        dispatch({ type: types.login, payload: user })
    }



    const logout = () => {
        localStorage.clear('userHeroes')
        dispatch({ type: types.logout })
    }
    

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
