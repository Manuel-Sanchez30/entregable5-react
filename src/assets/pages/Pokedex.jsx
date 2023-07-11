import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import PokeContainer from '../../components/home/pokedex/PokeContainer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Pokedex = () => {

    const [selectValue , setSelectValue] = useState('all-pokemons')    

    const trainerName = useSelector(states=>states.trainerName)

    let url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    const [ pokemons, getAllPokemons, hasError, setPokemons ] = useFetch(url)

    const urlTypes = 'https://pokeapi.co/api/v2/type'
    const [ types, getAllTypes ] = useFetch(urlTypes)

    useEffect(()=>{
        if(selectValue === 'all-pokemons'){
            getAllPokemons()
        }else{
            axios.get(selectValue)
                .then(res =>{
                    const data = {
                        results: res.data.pokemon.map(pokeInfo =>pokeInfo.pokemon)
                    }
                    setPokemons(data)
                })
                .catch(err => console.error(err))
        }
    }, [selectValue])

    useEffect(()=>{        
        getAllTypes()
    },[])

    
    

    const searchPokemon = useRef()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const inputValue = searchPokemon.current.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
    }

    const handleChangeType = (e)=>{
        setSelectValue(e.target.value)
    }

    return (
        <div className='home__trainer'>
            <div className='home__trainer-header'>
                <div>
                    <img src='../img/imagen1.png' alt="" />
                </div>
                <p className='home__trainer-title'>Welcome <span>{trainerName}</span>, find your favorite pokemon</p>
                <form className='form__trainer' onSubmit={handleSubmit}>
                    <input className='form__trainer-input' ref={searchPokemon} type="text" placeholder='look for a pokemon' />
                    <button className='form__trainer-button' >Search</button>
                    <select className='form__trainer-select' onChange={handleChangeType}>
                        <option value="all-pokemons">All pokemons</option>
                        {
                            types?.results.map(typeInfo =>(
                                <option 
                                    key={typeInfo.url}
                                    value={typeInfo.url}>{typeInfo.name}
                                </option>
                            ))
                        }
                        
                    </select>
                </form>
            </div>            
            <PokeContainer pokemons={pokemons?.results}/>    
        </div>
    )
}

export default Pokedex