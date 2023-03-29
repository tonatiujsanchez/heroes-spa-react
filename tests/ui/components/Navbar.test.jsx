import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context"
import { Navbar } from "../../../src/ui/components/Navbar"


const mockUseNavigate = jest.fn()

 jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
 }))


describe('Pruebas en Navbar', () => {

    const logout = jest.fn()

    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Santiago'
        },
        logout
    }

    beforeEach( ()=> jest.clearAllMocks() )


    test('Debe de mostrar el nombre del usuario', () => {


        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText( contextValue.user.name ) ).toBeTruthy()

    })



    test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {


        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByRole('button', { name: 'Logout' })
        fireEvent.click( logoutButton )

        expect( logout ).toHaveBeenCalled()
        expect( mockUseNavigate ).toHaveBeenCalled()
        expect( mockUseNavigate ).toHaveBeenCalledWith('/login', { replace: true })

    })

})