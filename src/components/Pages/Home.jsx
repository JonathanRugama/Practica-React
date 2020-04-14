import React from "react"
import Banner from "../Organisms/Banner"
import withLogin from "../HOC/withLogin"

const Home = (props) => (
    <div>
        
        <Banner />
        {console.log(props)}
        <h1>{props.loggued ? 'Pagina privada' : 'No hay login'}</h1>
    </div>
    
)

export default withLogin(Home)
