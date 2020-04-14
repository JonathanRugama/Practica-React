import React, {useState} from "react"


const Course = ({ match }) => {

    const [state, setState] = useState ({
        cursoActual: {
            "id": 1,
            "title": "React desde cero",
            "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
            "price": 30,
            "profesor": "Jona Rugama"
          }
    })

    console.log(state)
    //const cursoActual = cursos.filter (c => c.id === parseInt(match.params.id))[0]
    return (
        <div className = "ed-grid m-grid-3">
            {
               
                state.cursoActual ? (
                <>
                    <h1 className="m-cols-3">Curso: {state.cursoActual.title}</h1>
                     <img className="m-cols-1" src= {state.cursoActual.image} alt="Imagen"/>
                     <p className="m-cols-2">Profesor {state.cursoActual.profesor}</p>
                </>    
                ) : 
                    <h1>El curso no existe</h1>
            }

        </div>
    )
}
    

export default Course