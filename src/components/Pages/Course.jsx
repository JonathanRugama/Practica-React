import React, {useState, useEffect} from "react"
import axios from "axios";

const Course = ({ match }) => {

    const [state, setState] = useState ({ })
   
    useEffect (() => {
        axios.get(`https://my-json-server.typicode.com/jonathanrugama/json-db/courses/${match.params.id}`)
        .then(response => 
           setState(response.data))
        
    },[])

    console.log(state)
    //const cursoActual = cursos.filter (c => c.id === parseInt(match.params.id))[0]
    return (
        <div className = "ed-grid m-grid-3">
            {
               
                state ? (
                <>
                    <h1 className="m-cols-3">Curso: {state.title}</h1>
                     <img className="m-cols-1" src= {state.image} alt="Imagen"/>
                     <p className="m-cols-2">Profesor {state.profesor}</p>
                     
                </>    
                ) : 
                    <h1>El curso no existe</h1>
            }

        </div>
    )
}
    

export default Course