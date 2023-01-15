import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

import { characters } from '../util/data';



export const CharacterInf = () => {
   let { characterId } = useParams();


   let characterInfo = characters.find((character) => character.id === Number(characterId));

   const navigate = useNavigate();
   const backPage = () => {
    navigate(-1)
   } 
   
  return (
    <section className='grid grid-cols-1 justify-items-center p-2 mt-32 '>
        <article className='flex  justify-center items-center gap-6'>
            <h3 className='text-center text-slate-800 text-6xl font-black uppercase'>{characterInfo.name} </h3>
            <button 
                onClick={backPage}
                className='px-2 py-1 bg-slate-800 text-white rounded-3xl'
            >
                Regresar
            </button>
        </article>

        

       <section className=' mt-8'>
            <div className=' border-b border-black'>
                <img 
                    src={characterInfo.img} 
                    alt={characterInfo.name}
                    className='h-102' 
                />
            </div>
        </section> 
        <div className='text-center mt-6  '>
                <p className='h-32 w-72 text-xl'>{characterInfo.description}</p>
        </div>  

    </section>
  )
}

