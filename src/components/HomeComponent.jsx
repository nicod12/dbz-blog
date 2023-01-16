import React from 'react'

const HomeComponent = () => {


  return (
        <section className="mt-40">

                
            <h1 className="text-6xl text-center mt-16 text-black font-bold">Blog del Dragón</h1>

            <p className="text-center text-xl mt-4 text-black font-semibold tracking-wide">¡Bienvenido! guerrero 
                    <span className="text-xl"> Z</span>! <br /> En este blog encontraras
                    a tus guerreros Z favoritos con su respectiva historia 
            </p>
        


            <img 
                src="https://i.postimg.cc/XNLPQ2t4/shenlong.webp" 
                alt="..."
                className="h-1/4 w-auto mt-10 m-auto animate-pulse" 
            />

        </section>
  )
}

export default HomeComponent;