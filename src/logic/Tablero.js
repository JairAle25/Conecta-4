import { COLUMNAS,CombGanadoras } from "./Constantes";

export const IndicarColumna =(index)=>{
    let columnaIndicada;
    for(const colums of COLUMNAS){
        if(index===colums[0]||index===colums[1]||index===colums[2]||index===colums[3]||index===colums[4]){
            columnaIndicada=colums;
        }
    }
    return columnaIndicada;
}

export const posicionColocar =(columnaIndicada,nuevoTablero)=>{
    if(columnaIndicada[0]<=6){
        columnaIndicada.reverse();
    }
    const posicion = columnaIndicada.find(column => nuevoTablero[column]==null);
    return posicion != null ? posicion : null
}

export const ChekearGanador =(tableroChekear) =>{
    for(const comb of CombGanadoras){
      const [a,b,c,d] = comb;
      if(tableroChekear[a]!=null &&
        tableroChekear[a]===tableroChekear[b] &&
        tableroChekear[a]===tableroChekear[c] &&
        tableroChekear[a]===tableroChekear[d]
        )
        {
          return tableroChekear[a];
      }
    }
    return null;
}

export const chekearEmpate =(tableroCheckear)=>{
    let empate = true;
    tableroCheckear.forEach(pos => {
      if(pos==null)
      {
        empate=false;
      }
    });
    return empate;
}