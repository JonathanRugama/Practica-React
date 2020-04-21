import React, {Component} from 'react'
import CoursesContext from './CoursesContext'
import Axios from 'axios'

class CoursesProvider extends Component {
    constructor (props) {
        super(props)
        this.state = {
            courses: []
        }
    }   
    componentDidMount () {
        Axios.get('https://my-json-server.typicode.com/jonathanrugama/json-db/courses')
        .then(response => 
           this.setState({
               courses:response.data
           }))
    }
    render () {
        return (
           <CoursesContext.Provider value={this.state}>
               { this.props.children }
           </CoursesContext.Provider>
        )
    }
}
export default CoursesProvider