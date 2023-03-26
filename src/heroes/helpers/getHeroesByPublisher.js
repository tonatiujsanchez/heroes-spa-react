import { heroes } from '../data'


export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics']

    if( !validPublisher.includes( publisher ) ){
        throw new Error(`${ publisher } no es un publisher válido`)
    }

    return heroes.filter( heroe =>  heroe.publisher === publisher ) 
}
