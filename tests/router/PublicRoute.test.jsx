import { render, screen } from "@testing-library/react"

import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom"

import { AuthContext } from "../../src/auth/context"
import { PublicRoute } from "../../src/router/PublicRoute"


describe('Pruebas en el <PublicRoute />', () => {

    test('Debe de mostrar el children si NO esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( screen.getAllByText('Ruta publica') ).toBeTruthy()
    })



    test('Debe de Navegar SI no esta autenticado', () => {
        
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Santi'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={ <h1>Pagina de marvel</h1> }/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Pagina de marvel') ).toBeTruthy()

    })
})