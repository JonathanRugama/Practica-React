import React from "react"

class Formulario extends React.Component {

    constructor(props) {
        super(props)

        //this.setState({Objeto})
        this.state = { //El estado es solo para este componente
            nombre: "",
            correo: "",
            fecha: new Date ()
        }
        // Se construye la instancia con las propiedades que le pasemos. Es una necesidad
        // cuando el componente tiene props. Si el componente no recibe propiedades
        // no es necesario usar el constructor.
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }
    cambiarFecha(e) {
        this.setState({
            fecha: new Date ()
        })
    }
    render () {
        return (
            <div className="ed-grid">
               <h1>Formulario {this.props.nombre}</h1> 
        <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
               <form >
                        <div className="ed-grid m-grid-2">
                            
                            <div className="form__item">
                                <label> Nombre completo</label>
                                <input type="text" 
                                onChange= {this.cambiarNombre}/>
                            </div>

                            <div className="form__item">
                                <label> Correo electrónico</label>
                                <input type="email" onChange= {this.cambiarCorreo}/>
                            </div>
                            <div className="form__item">
                                <input className="button full" type="submit" value= "Enviar"/>
                            </div>
                                
                        </div>
               </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span> {`Tu correo es: ${this.state.correo}`}</span>
               </div>
            </div>
        )
    }
    componentDidMount()  {
        let elemento = document.getElementById("elemento")
        
        this.intervaloFecha = setInterval (() =>{
            this.cambiarFecha()
        },1000)

    
    }
    componentDidUpdate(prevProps, prevState) {
      /*   console.log(prevProps) */
        console.log(prevState)
        
    }
    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }
}


export default Formulario