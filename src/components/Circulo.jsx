export const Circulo = ({children,index,actualizarTablero,seleccionado}) =>{
    const Actualizar =()=>{
      actualizarTablero(index);
    }
      const nombreClase = `circulo ${seleccionado ? 'seleccionado' : ''}`
    return(
      <div onClick={Actualizar} className={nombreClase}>
        <span className='circulos'>
        {children}
        </span>
      </div>
    )
}