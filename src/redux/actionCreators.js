import { ADD_TO_CART, GET_COURSE_LIST } from "./actions"
import { REMOVE_OF_CART} from "./actions"
import Axios from "axios"
const addToCart = id => ({
    type: ADD_TO_CART,
    id
})

const removeOfCart = id => ({
    type: REMOVE_OF_CART,
    id
})
const getCourseList = () => dispatch => {
    Axios.get('https://my-json-server.typicode.com/jonathanrugama/json-db/courses')
    .then(response=> {
        return dispatch ({
            type: GET_COURSE_LIST,
            courses: response.data
        })
    })
}
export {addToCart, removeOfCart, getCourseList}