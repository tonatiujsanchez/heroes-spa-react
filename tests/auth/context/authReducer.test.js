import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types"


describe('Pruebas en el authReducer', () => {
    
    const initialState = {
        logged: false,
        user: null
    }


    test('Debe  de retirnar el estado por defecto', () => {

        const newState = authReducer( initialState, {} )

        expect( newState ).toEqual( initialState )
    })

    

    test('Debe de llamar al login y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Brandon'
            }
        }

        const newState = authReducer( initialState, action )

        expect( newState ).toEqual({ 
            logged: true, 
            user: action.payload 
        })

    })



    test('Debe de borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Brandon'
            }
        }
    
        const action = {
            type: types.logout,
        }

        const newState = authReducer( state, action )

        expect( newState ).toEqual({ logged: false })
        expect( newState.logged ).toBeFalsy()
    })
})