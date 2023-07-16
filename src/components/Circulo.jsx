export const Circulo = ({children,index,actualizarTablero,seleccionado,ganador}) =>{
    const Actualizar =()=>{
      actualizarTablero(index);
    }
   
    const nombreClaseTablero = `circulo ${seleccionado ? 'seleccionado' : ''}`

    return(
      <div onClick={Actualizar} className={nombreClaseTablero}>
        <span className='circulos'>
        {children}
        </span>
      </div>
    )
}