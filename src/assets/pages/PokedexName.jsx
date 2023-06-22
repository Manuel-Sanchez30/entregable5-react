
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'

const PokedexName = () => {

    const {name} = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon, getPokemonByName, hasError] = useFetch(url)


    useEffect(()=>{
        getPokemonByName()
    },[name])

    
    return (
        <div>
            <div>
                <img src='../public/img/imagen1.png' alt="" />
            </div>
            {
                hasError
                    ?<h1>this '<span>{name}</span>' doesn´t exist</h1>
                    :(
                        <>
                            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                            <h2>#{pokemon?.id}</h2>
                            <h2>{pokemon?.name}</h2>
                            <ul>
                                <li>weight <span>{pokemon?.weight}</span></li>
                                <li>height<span>{pokemon?.height}</span></li>
                            </ul>
                            <ul>
                                <p>Tipo</p>
                                {
                                        pokemon?.types.map(typeInfo =>(
                                            <li                                              
                                                key={typeInfo.type.url}>
                                                {typeInfo.type.name}
                                            </li> 
                                        ))
                                }
                            </ul>
                            <ul>
                                <p>Habilidades</p>
                                {
                                        pokemon?.abilities.map(InfoAbilities =>(
                                            <li                                              
                                                key={InfoAbilities.ability.url}>
                                                {InfoAbilities.ability.name}
                                            </li> 
                                        ))
                                }
                            </ul>
                            <ul>
                                <p>Stats</p>
                                {
                                    pokemon?.stats.map(stat => (
                                        <li /* key={} */>
                                            {stat.stat.name}
                                            {stat.base_stat}
                                        </li>
                                    ))
                                }
                            </ul>

                        </>
                    )
            }
            
        </div>
    )
}

export default PokedexName