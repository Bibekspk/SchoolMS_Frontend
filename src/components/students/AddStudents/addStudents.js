import { Component } from "react";
import { StudentsForm } from "../studentsForm/studentsForm";

export class AddStudent extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <StudentsForm></StudentsForm>
        )
    }
}