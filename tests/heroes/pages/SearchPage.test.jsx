import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"


const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
 }))


describe('Pruebas en SearchPage', () => {

    beforeEach(()=> jest.clearAllMocks() )
    

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar a batman y el imput con el valor del queryString',()=> {
        
        const query = 'batman'
        const urlImg = '/assets/heroes/dc-batman.jpg'
        
        render(
            <MemoryRouter initialEntries={[`/search?q=${query}`]}>
                <SearchPage />
            </MemoryRouter>
        )
        
        const input = screen.getByRole('textbox')
        const img = screen.getByRole('img')

        expect( input.value ).toBe(query)
        expect( img.src ).toContain(urlImg)

        // Comprobar mediante estilos
        // const alerta = screen.getByLabelText('alert-danger')
        // expect( alerta.style.display ).toBe('none')
    })


    test('Debe de mostrar un error si no se encuentra el Heroe(batman)', () => {

        const query = 'batman123'
        render(
            <MemoryRouter initialEntries={[`/search?q=${query}`]}>
                <SearchPage />
            </MemoryRouter>
        )

        const alerta = screen.getByLabelText('alert-danger')
        expect( alerta ).toBeTruthy()
        expect( screen.getByText('No hero with') ).toBeTruthy()

    })

    test('Debe de llamar el Navigate a la pantalla nueva', () => {

        const query = 'green'

        render(
            <MemoryRouter initialEntries={[`/search`]}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target: { name:'seachText', value: query } } )

        const form = screen.getByRole('form')
        fireEvent.submit( form )

        expect( mockUseNavigate ).toHaveBeenCalledWith(`?q=${query}`)

    })
})