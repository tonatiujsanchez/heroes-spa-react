import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const HeroPage = () => {

    
    const { id } = useParams()
    const navigate = useNavigate()

    const hero = useMemo( ()=> getHeroById(id), [id])

    const navigateBack = () => {
        navigate(-1)
    }


    if( !hero ) { return <Navigate to={'/marvel'} /> }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__bounceInLeft">
                <img 
                    src={`/assets/heroes/${ hero.id }.jpg`} 
                    alt={ hero.superhero }
                    title={ hero.superhero }
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h2>{ hero.superhero }</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego } </li>
                    <li className="list-group-item"><b>Publisher:</b> { hero.publisher } </li>
                    <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance } </li>
                </ul>
                <h4 className="mt-3">Charecters</h4>
                <p>{ hero.characters }</p>

                <button onClick={ navigateBack } className="btn btn-outline-danger">
                    Regresar
                </button>
            </div>
        </div>
    )
}
