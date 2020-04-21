import React from "react"
import axios from "axios";
import CourseGrid from "../Organisms/CourseGrid";
import CoursesContext from "../Context/CoursesContext";

const Courses = () => (
            
    <CoursesContext.Consumer>
        {context => <CourseGrid courses ={context.courses} />}
    </CoursesContext.Consumer>
        
);     
    


export default Courses 