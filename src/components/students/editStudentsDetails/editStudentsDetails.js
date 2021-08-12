import React, { Component } from 'react';
import { StudentsForm } from '../studentsForm/studentsForm';
import { connect } from 'react-redux'
import { GetOneStudent, GetStudent } from '../../actions/student.action';

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


    render() {
        let content = this.props.isLoading
            ? <p>Loading ...</p>
            :
            <div>
                <StudentsForm
                    mode="Edit"
                    studentData={this.props.student}
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
    getStudent: (id) => dispatch(GetOneStudent(id))
})

export const EditStudents = connect(MapStateToProps, MapDispatchToProps)(EditStudentsComponent)
