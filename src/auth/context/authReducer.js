import { types } from "../types";


const initalState = {
    logged: false,
}


export const authReducer = ( state = initalState, action ) => {

    switch (action.type) {

        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload
            }

        case types.logout:
            return {
                logged: false,
            }
    
            
        default:
            return state
    }
} 