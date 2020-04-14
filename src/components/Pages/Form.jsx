import React from "react"

class Form extends React.Component {

    constructor(props) {
        super(props)

        //this.setState({Objeto})
        this.state = { //El estado es solo para este componente
            name: "",
            mail: "",
            date: new Date ()
        }
        // Se construye la instancia con las propiedades que le pasemos. Es una necesidad
        // cuando el componente tiene props. Si el componente no recibe propiedades
        // no es necesario usar el constructor.
        this.changeName = this.changeName.bind(this)
        this.changeMail = this.changeMail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    changeMail(e) {
        this.setState({
            mail: e.target.value
        })
    }
    changeDate(e) {
        this.setState({
            date: new Date ()
        })
    }
    render () {
        return (
            <div className="ed-grid">
               <h1>Formulario {this.props.name}</h1> 
        <h4>Fecha actual: {Math.ceil(this.state.date/1000)}</h4>
               <form >
                        <div className="ed-grid m-grid-2">
                            
                            <div className="form__item">
                                <label> Nombre completo</label>
                                <input type="text" 
                                onChange= {this.changeName}/>
                            </div>

                            <div className="form__item">
                                <label> Correo electrónico</label>
                                <input type="email" onChange= {this.changeMail}/>
                            </div>
                            <div className="form__item">
                                <input className="button full" type="submit" value= "Enviar"/>
                            </div>
                                
                        </div>
               </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span> {`Tu mail es: ${this.state.mail}`}</span>
               </div>
            </div>
        )
    }
    componentDidMount()  {
        let element = document.getElementById("form-element")
        
        this.intervaloFecha = setInterval (() =>{
            this.changeDate()
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


export default Form