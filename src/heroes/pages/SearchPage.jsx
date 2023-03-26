
import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooks"
import { HeroCard } from "../components"

import { getHeroesByName } from "../helpers"


const HeroesResult = ({ heroes, q }) => {

    return heroes.length === 0
        ? (
            <div className="alert alert-danger animate__animated animate__fadeIn">
                No hero with <b>{q}</b>
            </div>
        ):(
            heroes.map( hero => (
                <HeroCard key={hero.id} { ...hero } />
            ))
        )
}


export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search) 

    const heroes = getHeroesByName(q)


    const { seachText, onInputChange } = useForm({
        seachText: q
    })


    const handleSearchSubmit = (event) => {
        
        event.preventDefault()

        navigate(`?q=${ seachText.trim() }`)
    }


    return (
        <>
            <h1 className="mt-5">SearchPage</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ handleSearchSubmit }>
                        <input 
                            type="text" 
                            name="seachText" 
                            id="seachText"
                            autoComplete="off"
                            placeholder="Search hero"
                            value={ seachText }
                            onChange={ onInputChange }
                            className="form-control mb-2"
                        />
                        <button className="btn btn-outline-primary">Search</button>
                    </form>
                </div>
                <div className="col-7">
                        <h4>Result</h4>
                        <hr />
                        {
                           q.trim() === ''
                                ?(
                                    <div className="alert alert-primary animate__animated animate__fadeIn">
                                        Search a hero
                                    </div>
                                ):(
                                    <HeroesResult heroes={ heroes } q={ q } />
                                )
                        }
                </div>
            </div>
        </>
    )
}
