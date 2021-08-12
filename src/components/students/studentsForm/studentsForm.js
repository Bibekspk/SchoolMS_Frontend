import { Component } from "react";
import { httpClient } from "../../../utilities/httpClient";

const defaultForm = {
    fullname: "",
    address: "",
    email: "",
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

    componentDidMount(){
        let {studentData} = this.props
        if(this.props.studentData){
            this.setState({
                userDetails:{
                    ...defaultForm,
                    ...studentData,
                    fathersName : studentData.parentName ? studentData.parentName.fathername : "" ,
                    mothersName : studentData.parentName ? studentData.parentName.mothername : "" ,
                    email : studentData.mail
                } 
            },()=>{
                console.log("state updated",this.state);
            })
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
        e.preventDefault()
        httpClient.POST('/student/addStudent', this.state.userDetails, true)
                    .then((response)=>{
                        console.log("response>>>",response)
                    })
                    .catch((error)=>{
                        console.log("error>>>",error)
                    })
    }

    render() {
        const { mode, studentData } = this.props;
        let {userDetails} = this.state
        console.log(studentData);
        return (
            <div style={{ marginLeft: "20%" }} className="container card mt-4 col-md-6">
                <h1 style={{ backgroundColor: "blue", color: "white", border: "2px solid white", textAlign: "center" }}>{mode} student</h1>
                <form className="col-md-12 form-group registerform" onSubmit={this.handleSubmit}>
                    <label htmlFor="fullname">Full name</label>
                    <input className="form-control" value={userDetails.fullname} type="text" name="fullname" placeholder="fullname" onChange={this.handleChange} required></input>
                    <label htmlFor="address">address</label>
                    <input className="form-control" value={userDetails.address} type="text" name="address" placeholder="address" onChange={this.handleChange} required></input>
                    <label htmlFor="email">Email</label>
                    <input className="form-control" value={userDetails.email} type="text" name="email" placeholder="email" onChange={this.handleChange} required></input>
                    <label htmlFor="fathersName">Father's Name</label>
                    <input className="form-control" value={userDetails.fathersName} type="text" name="fathersName" placeholder="fathersName" onChange={this.handleChange} required></input>
                    <label htmlFor="mothersName">Mother's Name</label>
                    <input className="form-control" value={userDetails.mothersName} type="text" name="mothersName" placeholder="mothersName" onChange={this.handleChange} required></input>
                    <label htmlFor="contact">Contact</label>
                    <input className="form-control" value={userDetails.contact} type="text" name="contact" placeholder="contact" onChange={this.handleChange} required></input>
                    <label htmlFor="gender">Gender</label>

                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" name="dob" value={userDetails.dob} placeholder="dob" onChange={this.handleChange} required></input>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}