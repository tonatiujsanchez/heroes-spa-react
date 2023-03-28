import { types } from "../../../src/auth/types";

describe('Pruebas en "types.js"', () => {

    test('Debe de regresar estos types para el reducer', () => {
        expect( types ).toEqual({
            login : '[Auth] - Login',
            logout: '[Auth] - Logout',
        })
    })
    
})