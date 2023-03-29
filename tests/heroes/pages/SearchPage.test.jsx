import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('Pruebas en SearchPage', () => {
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
})