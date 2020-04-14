import React, {Component} from "react"
import axios from "axios"


class Course extends Component {
  
      constructor (props) {
        super (props)  
        this.state = {
            cursoActual: {}
        }
      }
      componentDidMount () {
        axios.get(`https://my-json-server.typicode.com/jonathanrugama/json-db/courses/${this.props.match.params.id}`)
        .then(response => 
           this.setState({
               cursoActual:response.data
        }))
    }

       render() {
        return (
            <div className = "ed-grid m-grid-3">
                {
                   
                   this.state.cursoActual ? (
                    <>
                        <h1 className="m-cols-3">Curso: {this.state.cursoActual.title}</h1>
                         <img className="m-cols-1" src= {this.state.cursoActual.image} alt="Imagen"/>
                         <p className="m-cols-2">Profesor {this.state.cursoActual.profesor}</p>
                    </>    
                    ) : 
                        <h1>El curso no existe</h1>
                }
        
            </div>
        )
       }
}
    

export default Course


/* return (
    <div className = "ed-grid m-grid-3">
        {
           
            cursoActual ? (
            <>
                <h1 className="m-cols-3">Curso: {cursoActual.title}</h1>
                 <img className="m-cols-1" src= {cursoActual.image} alt="Imagen"/>
                 <p className="m-cols-2">Profesor {cursoActual.profesor}</p>
            </>    
            ) : 
                <h1>El curso no existe</h1>
        }

    </div>
) */