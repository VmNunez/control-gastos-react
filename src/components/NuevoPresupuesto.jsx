export const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        
        <form className="formulario">
            <div className="campo">
                <label htmlFor="" >Definir Presupuesto</label>
                <input 
                    type="text"
                    className="nuevo-presupuesto"
                    placeholder="Añade Tu Presupuesto"
                 />
            </div>
            <input type="submit" value = "Añadir" />
        </form>
    </div>
  )
}
