import { heroes } from "../data"



export const getHeroesByName = ( name = '' ) => {

    if( name.trim() === '' ){
        return []
    }

    name = name.toLocaleLowerCase().trim()

    return heroes.filter( heroes => heroes.superhero.toLocaleLowerCase().includes( name ) )
}
