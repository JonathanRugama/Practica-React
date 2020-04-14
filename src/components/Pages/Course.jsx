import React, {useState} from "react"


const Course = ({ match }) => {

    const [state, setState] = useState ({
        
            id: 1,
            title: "React desde cero",
            image: "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
            price: 30,
            profesor: "Jona Rugama"
          
    })
    const changeTitle = (text) => {
        setState({
            ...state,     /* Aca le estamos diciendo que pase todas las demas propiedades, y que solamente
            modifique el titulo */
            title: text
        })
    }

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
                     <button onClick ={changeTitle.bind(this, "Go desde cero")}>Cambiar titulo</button>
                </>    
                ) : 
                    <h1>El curso no existe</h1>
            }

        </div>
    )
}
    

export default Course