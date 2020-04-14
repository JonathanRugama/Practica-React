import React from "react"
import Banner from "../Organisms/Banner"
import withLogin from "../HOC/withLogin"
import Counter from "../Molecules/Counter"



const Home = (props) => (
   
    
   <>
   
    <div>
        
        <Banner />
        {console.log(props)}
        <h1>{props.loggued ? 'Pagina privada' : 'No hay login'}</h1>
         <Counter />   
    </div>
   
    </>
)

export default withLogin(Home)
