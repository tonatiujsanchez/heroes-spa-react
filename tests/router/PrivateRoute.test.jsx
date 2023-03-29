import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth/context"
import { PrivateRoute } from "../../src/router/PrivateRoute"

describe('Pruebas en <PrivateRoute />', () => {
    
    
    test('Debe de mostrar el children SI esta autenticado', () => {


        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Santi'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Hola mundo!!</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Hola mundo!!') ).toBeTruthy()
        expect( localStorage.setItem ).toHaveBeenCalled()
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPathHeroes", "/search?q=batman")
    })

})