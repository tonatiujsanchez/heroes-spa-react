import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImgUrl = `/assets/heroes/${id}.jpg`
    
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">

                    <div className="col-4 animate__animated animate__fadeIn">
                        <img 
                            src={ heroImgUrl } 
                            alt={ superhero } 
                            title={ superhero }
                            className="card-img"
                        />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-title fw-bold">{ superhero }</p>
                            <p className="card-text">{alter_ego}</p>
                            {
                                alter_ego !== characters && (
                                    <p>{characters }</p>
                                )
                            }
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <Link to={`/hero/${id}`}>Ver</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
