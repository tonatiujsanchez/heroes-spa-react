import { MemoryRouter } from "react-router-dom"

import { render, screen } from "@testing-library/react"

import { AppRouter } from "../../src/router/AppRouter"
import { AuthContext } from "../../src/auth/context"

describe('Pruebas en AppRouter', () => {
    
    test('Debe de mostrar el login si no esta autenticado', () => {
        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect( screen.getByText('Login') ).toBeTruthy()
    })


    test('Debe de mostrar el componente de marvel si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Santi'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect( screen.getByText('MARVEL COMICS') ).toBeTruthy()
    })
})