import { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { DateFormatter } from "../../../utilities/dateFormatter";
import { AddAttendance, GetStudent } from "../../actions/student.action";
import './attendance.css';


class AttendanceComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            class: "",
            date: "",
            attendance: [],
            studentData: {
                student: "",
                status: "",
                name: "",
                date : ""
            }
        }
    }


    handleChange = (e, student) => {
        const { name, value, type } = e.target;
        if(name==="class"){
            this.setState({
                class: value
            })
        }
        if(type==="date"){
            this.setState({
                date: value
            })
        }
        if (type === "radio") {
           
            this.setState((prevState) => ({
                ...prevState,
                studentData: {
                    student: student._id,
                    name: student.fullname,
                    status: value,
                    date : DateFormatter(this.state.date)
                }
            }), () => {
                this.handleAttendance(this.state.studentData);
            })
        }
        // this.setState({
        //     [name]: value
        // })
       
    }

    handleAttendance = (studentData) => {
       

        this.state.attendance.push(studentData); // in radiobutton we cannot add same value twice.
        //so the duplicate value of same user and same attendance wont be a problem
        this.state.attendance.forEach((studentAtt) => {
            // i am using array > 1 because if not then every time studentAtt(arryaitem) 
            // and studentData(input) will be same and array will be spliced. first value is same so
            if (this.state.attendance.length > 1 && studentData.student === studentAtt.student) {
                //yedi student equal navaye add huncha remove hunna value
                if (studentData.status !== studentAtt.status) {
                    //we are checking if student is same then we check if the attendance is different
                    // if it is different then we remove earlier value and and only keep new value 
                
                    let index = this.state.attendance.indexOf(studentAtt)
                    // we are taking index of earlier value of student 
                    //kinaki student equal vayesi and status unequal vayesi old 0 ma bascha new 1 ma bascha 
                    //ani iterate garda 0 ko suru ma huncha tei vayera index hamley purano ko linchau 
                    // ani teslai remove gardinchau 
                    this.state.attendance.splice(index, 1);
                }
            }
        })
        
    }

    handleSubmit = (e,type) => {
        e.preventDefault();
        if(!this.state.date){
            window.alert("Please select date of attendance before getting students !!");
            return
        }
        this.props.getStudents({class:this.state.class});
        if(type==="submit"){
            if(!this.state.date){
                toast.error("Please select date");
                return
            }  
            if(this.state.attendance.length !== this.props.studentList.length){
                toast.error("Please provide attendace of all the students");
                return
            }
            this.props.attendance(this.state.attendance);   
            if(this.props.isSuccess){
                console.log(this.props.isSuccess);
                this.setState({
                    attendance: []
                })
                console.log(this.state.attendance)
            }        
               
        }
    }
    render() {
        console.log(this.state)
        return (
            <div className="attendance">
                <h2>Attendance</h2>
                <form id="attendanceForm" className="attendanceForm" onSubmit={this.handleSubmit}>
                    <select name="class" id="class" value={this.state.class} onChange={this.handleChange} required>
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
                    
                    <input type= "date" name="date" value={this.state.date} onChange={this.handleChange} id="date"></input>
                    <button className="btn btn-primary float-right ml-2 mr-4">Get Students</button>
                </form>
                <br />
                <div className="tablediv mr-2">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="text-center">SN</th>
                                <th className="text-center">Student Name</th>
                                <th className="text-center">Attendance Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.studentList.length &&
                                this.props.studentList.map((student, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">{student.fullname}</td>
                                        <td className="text-center">
                                        <div  onChange={(e) => this.handleChange(e, student)} >
                                                <input type="radio" id={`present-${student._id}`} name={student._id} value="Present"></input><label htmlFor={`present-${student._id}`}>&nbsp;Present&nbsp;&nbsp;&nbsp;</label>
                                                <input type="radio" id={`absent-${student._id}`} name={student._id} value="Absent"></input><label htmlFor={`absent-${student._id}`}>&nbsp;Absent&nbsp;&nbsp;&nbsp;</label>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                  
                    
                </div>
                {
                        this.props.studentList.length ?
                    <button disabled={this.props.isLoading} onClick={(e)=>this.handleSubmit(e,"submit")} className="btn btn-primary float-left mb-3 mt-2">{this.props.isLoading ? "Submitting" : "Submit"}</button> : null

                    }
            </div>
        )
    }
}

const MapStateToProps = (rootState) => ({
    studentList: rootState.students.students,
    isLoading : rootState.students.isLoading,
    isSuccess : rootState.students.isSuccess
})

const MapDispatchToProps = (dispatch) => ({
    getStudents: (data) => dispatch(GetStudent(data)),
    attendance : (data) => dispatch(AddAttendance(data))
})

export const Attendance = connect(MapStateToProps, MapDispatchToProps)(AttendanceComponent)