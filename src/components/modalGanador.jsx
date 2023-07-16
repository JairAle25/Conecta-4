import { Circulo } from "./Circulo";

export const ModalGanador =({ganador,ResetJuego})=>{
    if(ganador==null) {
      return null;
    }
    const textoGanador = ganador==false ? 'Empate' : 'Gano';

    return(
      <section className='ganador'>
        <div className='texto'>
          <h1>{textoGanador}</h1>
          <div>
            {
            ganador && <Circulo>{ganador}</Circulo> 
            }
          </div>
          <footer>
            <button onClick={ResetJuego} className='reinicio'>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
    )
}