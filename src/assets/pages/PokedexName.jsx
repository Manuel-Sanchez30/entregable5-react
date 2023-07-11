
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
            <div className='img__base'>
                <img src='../img/imagen1.png' alt="" />
            </div>
            {
                hasError
                    ?
                        <>
                            <div className='error'>
                                <h1>this '<span className='error__name'>{name}</span>' doesn´t exist</h1>
                                <img src='../img/error.jpg' alt="" />
                            </div>
                            
                        </>
                    :(
                        <>
                            <div className="pokedexName">
                                <div>
                                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                                <div className="pokedexname__info">
                                    <h2 className='pokedexname__id'>#{pokemon?.id}</h2>
                                    <h2 className='pokedexname__name'>{pokemon?.name}</h2>
                                    <ul className='pokedexname__wh'>
                                        <li className='pokedexname__wh--label'>weight <span className='pokedexname__wh--value'>{pokemon?.weight}</span></li>
                                        <li className='pokedexname__wh--label'>height<span className='pokedexname__wh--value'>{pokemon?.height}</span></li>
                                    </ul>
                                </div>
                                <div className='typeAbilities'>
                                    <ul >
                                        <p>Tipo</p>
                                        <div className='typeAbilities__items'>
                                            {
                                                
                                                pokemon?.types.map(typeInfo =>(
                                                    <li                                              
                                                        key={typeInfo.type.url}>
                                                        {typeInfo.type.name}
                                                    </li> 
                                                ))
                                            }
                                        </div>
                                        
                                    </ul>
                                    <ul >
                                        <p>Habilidades</p>
                                        <div className='typeAbilities__items'>
                                            {
                                                    pokemon?.abilities.map(InfoAbilities =>(
                                                        <li                                              
                                                            key={InfoAbilities.ability.url}>
                                                            {InfoAbilities.ability.name}
                                                        </li> 
                                                    ))
                                            }
                                        </div>
                                    </ul>
                                </div>
                                
                                    <ul className='pokedexStats'>
                                        <p>Stats</p>
                                        
                                            {
                                                pokemon?.stats.map(stat => (
                                                    <div className='pokedexStats__item'>
                                                        <li className='pokedexStats__value'/* key={} */>
                                                            {stat.stat.name}: 
                                                            <span className="pokedexStats__barra"                      
                                                            ></span>
                                                            <span className="pokedexStats__barra-value" style={{width: `{stat.base_stat * 150 / 100}`}}></span>
                                                            {stat.base_stat}/150
                                                            
                                                        </li>
                                                    </div>
                                                ))
                                            }
                                    
                                        
                                    </ul>
                                </div>
                            </div>
                            

                        </>
                    )
            }
            
        </div>
    )
}

export default PokedexName