
import { characters } from "../util/data"
import { Link } from 'react-router-dom'



const CharacterComponent = () => {



  
  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-200 mt-44 ">
        
          <section className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-14 mb-28">

            {
              characters.map( character => {
                return(
                  <article 
                    className="group relative items-center justify-center overflow-hidden cursor-pointer"
                    key={character.id}
                  >
                     <ul>
                      <div className="h-96 w-72">
                        <img src={character.img} alt={character.name} className="h-auto w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-transparent to-yellow-600 rounded-3xl  animate-pulse"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] group-hover:translate-y-0 transition-all">
                        <div className='p-2 bg-orange-200 bg-gradient-to-b from-transparent via-transparent to-orange-400 rounded-full'>
                            <h2 className="text-3xl font-bold  text-stone-800 uppercase">{character.name}</h2>
                        </div>
                        <p className=" text-xl font-black italic  text-white mb-3">{character.information}</p>
                        <button
                          className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white"
                        >
                            <Link 
                              to={`/characters/${character.id}`}
                            >Ver más
                            </Link>
                        </button> 
                      </div>
                     </ul> 
                  </article>
                  
                )
              })
            }

          </section>
      </main>
  )
}

export default CharacterComponent;