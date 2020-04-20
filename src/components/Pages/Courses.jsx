import React from "react"
import CourseGrid from "../Organisms/CourseGrid";
import {connect} from "react-redux"

const Courses = ({courses}) => <CourseGrid courses ={courses} />
          
    

const mapStateToProps = state => ({
courses: state.coursesReducer.courses
})

/* Hay que conectarse al estado global */
export default connect (mapStateToProps,{})(Courses) 