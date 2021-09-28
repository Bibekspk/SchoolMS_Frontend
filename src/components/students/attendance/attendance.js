import { Component } from "react";
import { connect } from "react-redux";
import { GetStudent } from "../../actions/student.action";
import './attendance.css'

class AttendanceComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            class: "",
            attendance: [],
            studentData: {
                student: "",
                status: "",
                naem: ""
            }
        }
    }


    handleChange = (e, student) => {
        const { name, value, type } = e.target;
        const { studentData, attendance } = this.state;
        if (type === "radio") {
            this.setState((prevState) => ({
                ...prevState,
                studentData: {
                    student: student._id,
                    name: student.fullname,
                    status: value
                }
            }), () => {
                console.log(this.state.studentData)
                this.handleAttendance(this.state.studentData);
            })
        }
        this.setState({
            [name]: value
        })
    }

    handleAttendance = (studentData) => {

        this.state.attendance.push(studentData); // in radiobutton we cannot add same value twice.
        //so the duplicate value of same user and same attendance wont be a problem
        this.state.attendance.forEach((studentAtt) => {
            // i am using array > 1 because if not then every time studentAtt(arryaitem) 
            // and studentData(input) will be same and array will be spliced.
            if (this.state.attendance.length > 1 && studentData.student === studentAtt.student) {
                //yedi student equal navaye add huncha remove hunna value
                if (studentData.status !== studentAtt.status) {
                    //we are checking if student is same then we check if the attendance is different
                    // if it is different then we remove earlier value and and only keep new value 
                    //as done in line 44.
                    let index = this.state.attendance.indexOf(studentAtt)
                    // we are taking index of earlier value of student 
                    //kinaki student equal vayesi and status unequal vayesi old 0 ma bascha new 1 ma bascha 
                    //ani iterate garda 0 ko suru ma huncha tei vayera index hamley purano ko linchau 
                    // ani teslai remove gardinchau 
                    this.state.attendance.splice(index, 1);
                }
            }
            console.log(this.state.attendance)
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getStudents(this.state);
        this.setState({
            class: ""
        })
    }
    render() {
        return (
            <div className="attendance">
                <h2>Attendance</h2>
                <form className="attendanceForm" onSubmit={this.handleSubmit}>
                    <select name="class" id="class" value={this.state.class} onChange={this.handleChange}>
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
                    <button className="btn btn-primary float-right">Get Students</button>
                </form>
                <br />
                <div className="tablediv">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="text-center">SN</th>
                                <th className="text-center">Student Name</th>
                                <th className="text-center">Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.studentList.length &&
                                this.props.studentList.map((student, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">{student.fullname}</td>
                                        <td className="text-center">
                                            <div onChange={(e) => this.handleChange(e, student)}>
                                                <input type="radio" name={student.fullname} value="Present"></input><label>&nbsp;Present&nbsp;</label>
                                                <input type="radio" name={student.fullname} value="Absent"></input><label>&nbsp;Absent&nbsp;</label>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

const MapStateToProps = (rootState) => ({
    studentList: rootState.students.students
})

const MapDispatchToProps = (dispatch) => ({
    getStudents: (data) => dispatch(GetStudent(data))
})

export const Attendance = connect(MapStateToProps, MapDispatchToProps)(AttendanceComponent)