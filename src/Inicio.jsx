import imagen from './assets/pokemon.jpg'

function Inicio(){
    return(
      <>
      <h1>Hello My APP</h1>
      <h1> Con React y Vite</h1>
      <img className='imagen' src={imagen} /> 
      </>
    )
  }

  export default Inicio;