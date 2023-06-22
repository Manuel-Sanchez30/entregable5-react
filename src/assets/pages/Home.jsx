import React, { useRef } from 'react'
import { setTrainerNameG } from '../../store/slices/trainerName';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const trainerNameRef = useRef()
    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(setTrainerNameG( trainerNameRef.current.value.trim()))
        navigate('/pokedex')
    }
    
    return (

        <div className='home'>
            <div className='home__header'>
                <img src='../public/img/imagen1.png' alt="" />
            </div>
            <h2 className='home__tittle'>Hi Trainer</h2>
            <p className='home__body'>to get started, write your name.</p>
            <form className='home__form' onSubmit={handleSubmit}>
                <input ref={trainerNameRef} type="text" placeholder='your name'/>
                <button className='form__btn' >Start</button>   
            </form>
            <div className='home__img'>
                <img src='../public/img/img6.jpg' alt="" />
            </div>
            {/* <footer className='home__footer'>
                <div className='footer__body'>
                    <div className='footer__home'></div>
                    <div className='footer__home2'></div>                
                </div>
                <div className='footer__img'>
                <img src='../public/img/img2.png' alt="" />
                </div>
                <div className='footer__img2'>
                <img src='../public/img/img3.png' alt="" />
                </div>
            </footer> */}
        </div>

    )
}

export default Home