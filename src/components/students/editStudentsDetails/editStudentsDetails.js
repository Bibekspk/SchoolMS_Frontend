import React, { Component } from 'react';
import { StudentsForm } from '../studentsForm/studentsForm';
import { connect } from 'react-redux'
import { EditStudent, GetOneStudent, GetStudent } from '../../actions/student.action';

export class EditStudentsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.id = this.props.match.params['id']
        this.props.getStudent(this.id);
    }

    handleEdit = (data) => {
        console.log("inside edit", data);
        console.log("props", this.props);
        this.props.editStudent(data, this.id,this.props.history)     
    }


    render() {
        let content =
            <div>
                <StudentsForm
                    mode="Edit"
                    studentData={this.props.student}
                    EditData={this.handleEdit}
                ></StudentsForm>
            </div>

        return (
            <div>{content}</div>
        )
    }
}

const MapStateToProps = (rootState) => ({
    student: rootState.students.student,
    isLoading: rootState.students.isLoading
})

const MapDispatchToProps = (dispatch) => ({
    getStudent: (id) => dispatch(GetOneStudent(id)),
    editStudent: (data, id,history) => dispatch(EditStudent(data, id,history))
})

export const EditStudents = connect(MapStateToProps, MapDispatchToProps)(EditStudentsComponent)
