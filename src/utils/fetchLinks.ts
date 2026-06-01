import { movieGenres, seriesGenres } from '../constants/navigationData'



export function fetchLinks (prop: string){
        if(prop === 'mn-mov-01'){
            return movieGenres
        }
        else if (prop === 'mn-tv-01'){
            return seriesGenres
        }
        else {
            return []
        }
}