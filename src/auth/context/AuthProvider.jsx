import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"


const initalState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( authReducer, initalState )


    return (
        <AuthContext.Provider
            value={{
                ...state
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
