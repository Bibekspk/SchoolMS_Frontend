import React, { Component } from 'react';
import './student.component.css'
import { connect } from 'react-redux';
import { GetStudent } from '../../actions/student.action';

const form = {
    class: ""
}

export class Studentcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNumber: 1,
            pageCount: 10,
            data: {
                ...form
            },

        }
    }

    componentDidMount() {
        let { pageNumber, pageCount } = this.state;
        this.props.getStudentList({ pageCount, pageNumber })
    }

    orderByClass = () => {
        let { data } = this.state;
        let studentByClass = this.props.student.filter((student, index) => (  
            (student.class === Number(data.class))
        ))
        this.setState({
            students : studentByClass
        })
    }

    handleDelete=(student)=>{
       let confirm = window.confirm(`Do you want to delete ${student.fullname} from system?`)

    }

    handleEdit=(student)=>{
       let confirm = window.confirm(`Do you want to edit ${student.fullname} details of the system?`)

    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }), () => {
            this.orderByClass()
        })
    }

    handlePage = (type) => {
        let { pageNumber, pageCount } = this.state
        if (type === "Previous") {
            pageNumber = pageNumber - 1
        }
        if (type === "Next") {
            pageNumber = pageNumber + 1
        }
        this.setState({
            pageNumber
        }, () => {
            this.props.getStudentList({ pageNumber, pageCount })
            this.orderByClass()
        })
    }

    render() {
        let { data, pageNumber,students } = this.state;
        let studentList = data.class ? students : this.props.student
        return (
            <div>
                <div className="ml-1 col-md-12 col-sm-12 col-xs-12 studentlist">
                    <h2>Student List</h2>
                    <form className="col-md-12 form-group" >
                        <select name="class" id="class" value={data.class} onChange={this.handleChange} >
                            <option value="">-Select Class-</option>
                            <option value="Nursey"> Nursey</option>
                            <option value="LKG"> LKG</option>
                            <option value="UKG"> UKG</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                            <option value="6"> 6</option>
                            <option value="7"> 7</option>
                            <option value="8"> 8</option>
                            <option value="9"> 9</option>
                            <option value="10"> 10</option>
                        </select>
                    </form>
                            <>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Student Name</th>
                                            <th className="text-center">Student Class</th>
                                            <th className="text-center">Guardian Contact</th>
                                            <th className="text-center">Address</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (studentList || []).map((student, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{student.fullname}</td>
                                                    <td className="text-center">{student.class}</td>
                                                    <td className="text-center">{student.contact}</td>
                                                    <td className="text-center">{student.address}</td>
                                                    <td className="text-center">
                                                    <i onClick={()=>this.handleDelete(student)} title="Delete Student" style={{fontSize:"25px", color: "red",marginRight:"8px"}} class="fas fa-trash"></i>
                                                    <i onClick={()=>this.handleEdit(student)} title="Edit Student" style={{fontSize:"25px", color: "green"}} class="far fa-edit"></i>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </>
                    <br></br>
                    {
                        pageNumber > 1 &&
                        <button style={{ display: "inline", width: "80px", float: "left" }} onClick={() => this.handlePage('Previous')} className="btn btn-success ">Previous</button>
                    }
                    <button style={{ display: "inline", width: "80px", marginLeft: "2px" }} onClick={() => this.handlePage('Next')} className="btn btn-success">Next</button>
                </div>

            </div>
        )
    }
}

const MapStateToProps = rootStore => ({
    user: rootStore.users.user,
    student: rootStore.students.students

})

const MapDispatchToProps = dispatch => ({
    getStudentList: (data) => dispatch(GetStudent(data))
})


export const StudentListComponent = connect(MapStateToProps, MapDispatchToProps)(Studentcomponent)