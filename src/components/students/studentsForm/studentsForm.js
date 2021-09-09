import { Component } from "react";
import { DateFormatter } from "../../../utilities/dateFormatter";
import { httpClient } from "../../../utilities/httpClient";

const defaultForm = {
    fullname: "",
    address: "",
    mail: "",
    fathersName: "",
    mothersName: "",
    contact: "",
    gender: "",
    dob: ""
}

export class StudentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                ...defaultForm
            },
            userDetailsErr: {
                ...defaultForm
            }
        }
    }

    componentDidMount() {
        console.log(this.props.studentData);
        const { studentData } = this.props
        if (studentData) {
            this.setState({
                userDetails: {
                    ...defaultForm,
                    ...studentData,
                    fathersName: studentData.parentName ? studentData.parentName.fathername : "",
                    mothersName: studentData.parentName ? studentData.parentName.mothername : "",
                    dob :  studentData.DOB ? DateFormatter(studentData.DOB) : ""
                }
            }
            )
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const { userDetails } = this.state;
        this.setState((prevState) => ({
            userDetails: {
                ...userDetails,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        if (this.props.mode === "Edit") {
            this.props.EditData(this.state.userDetails)
        }
        e.preventDefault()
        httpClient.POST('/student/addStudent', this.state.userDetails, true)
            .then((response) => {
                console.log("response>>>", response)
            })
            .catch((error) => {
                console.log("error>>>", error)
            })
    }

    render() {
        const { mode, studentData } = this.props;
        let { userDetails } = this.state
        console.log(studentData);
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div  className=" mt-4 col-md-6 col-sm-12">
                    <h1 style={{ backgroundColor: "blue", color: "white", border: "2px solid white", textAlign: "center" }}>{mode} student</h1>
                    <form className="col-md-12 form-group registerform" onSubmit={this.handleSubmit}>
                        <label htmlFor="fullname">Full name</label>
                        <input className="form-control" value={userDetails.fullname} type="text" name="fullname" placeholder="fullname" onChange={this.handleChange} required></input>
                        <label htmlFor="address">address</label>
                        <input className="form-control" value={userDetails.address} type="text" name="address" placeholder="address" onChange={this.handleChange} required></input>
                        <label htmlFor="mail">Email</label>
                        <input className="form-control" value={userDetails.mail} type="text" name="mail" placeholder="email" onChange={this.handleChange} required></input>
                        <label htmlFor="fathersName">Father's Name</label>
                        <input className="form-control" value={userDetails.fathersName} type="text" name="fathersName" placeholder="fathersName" onChange={this.handleChange} required></input>
                        <label htmlFor="mothersName">Mother's Name</label>
                        <input className="form-control" value={userDetails.mothersName} type="text" name="mothersName" placeholder="mothersName" onChange={this.handleChange} required></input>
                        <label htmlFor="contact">Contact</label>
                        <input className="form-control" value={userDetails.contact} type="text" name="contact" placeholder="contact" onChange={this.handleChange} required></input>
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" className="form-control" value={userDetails.gender} onChange={this.handleChange}>
                            <option value="">-- Select Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <label htmlFor="dob">Date of birth</label>
                        <input className="form-control" type="date" name="dob" value={userDetails.dob} placeholder="dob" onChange={this.handleChange} required></input>
                        <br></br>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-3"></div>

            </div>
        )
    }
}