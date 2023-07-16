import { useState } from 'react'
import './App.css'
import { TURNOS} from './logic/Constantes'
import { IndicarColumna,posicionColocar,ChekearGanador,chekearEmpate} from './logic/Tablero'
import { ModalGanador } from './components/modalGanador'
import { Circulo } from './components/Circulo'



function App() {
  const [tablero,setTablero] = useState(Array(35).fill(null));
  const [turno,setTurno] = useState(TURNOS.futbol);
  const [ganador,setGanador] = useState(null);

  const ResetJuego =()=>{
    setTablero(Array(35).fill(null));
    setTurno(TURNOS.futbol);
    setGanador(null);
  }

  const actualizarTablero=(index)=>{
    if(ganador!=null) return;

    //Actualizando Tablero
    const nuevoTablero = [...tablero];
    const pos = posicionColocar(IndicarColumna(index),nuevoTablero);
    if(pos==null){
      return;
    } 
    nuevoTablero[pos]=turno;
    setTablero(nuevoTablero);

    //Actualizando turno
    const nuevoTurno = turno === TURNOS.futbol ? TURNOS.basquet : TURNOS.futbol;
    setTurno(nuevoTurno);

    //Actualizando ganador
    const nuevoGanador = ChekearGanador(nuevoTablero);
    if(nuevoGanador!=null){
      setGanador(nuevoGanador);
    }else if(chekearEmpate(nuevoTablero)===true){
      setGanador(false);
    }
  }

  return (
    <main className='contJuego'>
      <h1 className='titulo'>Conecta 4</h1>
      <section className='juego'>
        {
          tablero.map((_,index) => {
            return(
              <Circulo 
                key={index} 
                index={index} 
                actualizarTablero={actualizarTablero}
                ganador={ganador}
                >
                {tablero[index]}
              </Circulo>
            )
          })
        }
      </section>
      <section className='turnos'>
          <Circulo seleccionado={turno==TURNOS.futbol}>
            {TURNOS.futbol}
          </Circulo>
          <Circulo seleccionado={turno==TURNOS.basquet}>
            {TURNOS.basquet}
          </Circulo>
      </section>
      <section>
        <button onClick={ResetJuego} className='reinicio'>Reiniciar Juego</button>
      </section>
      <section>
        {ganador && <ModalGanador ganador={ganador} ResetJuego={ResetJuego}/>}
      </section>
    </main>
  )
}

export default App
