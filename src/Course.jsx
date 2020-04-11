import React from "react"

const cursos = [
    {
        "id":1,
        "title": "React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
        "price": 30,
        "profesor": "Jona Rugama"
    }, 
    {
        "id":2,
        "title": "JavaScript desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
        "price": 40,
        "profesor": "Mary Rugama"
    }, 
    {
        "id":3,
        "title": "CSS desde cero",
        "image": "https://res.cloudinary.com/edteam/image/upload/v1585761957/blog/qoimvvcongtrvewiagvc.png",
        "price": 70,
        "profesor": "Liz Rugama"
        
    }, {
        "id":4,
        "title": "Go desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png",
        "price": 10,
        "profesor": "Carmen Rugama"
    }
]
const Course = ({ match }) => {
    const cursoActual = cursos.filter (c => c.id === parseInt(match.params.id))[0]
    return (
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
    )
}
    

export default Course