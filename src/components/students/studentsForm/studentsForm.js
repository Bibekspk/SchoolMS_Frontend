import { Component } from "react";
import { httpClient } from "../../../utilities/httpClient";

const defaultForm = {
    fullname: "",
    username: "",
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
        const { mode } = this.props;
        return (
            <div style={{ marginLeft: "20%" }} className="container card mt-4 col-md-6">
                <h1 style={{ backgroundColor: "blue", color: "white", border: "2px solid white", textAlign: "center" }}>{mode} student</h1>
                <form className="col-md-12 form-group registerform" onSubmit={this.handleSubmit}>
                    <label htmlFor="fullname">Full name</label>
                    <input className="form-control" type="text" name="fullname" placeholder="fullname" onChange={this.handleChange} required></input>
                    <label htmlFor="username">Username</label>
                    <input className="form-control" type="text" name="username" placeholder="username" onChange={this.handleChange} required></input>
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="text" name="email" placeholder="email" onChange={this.handleChange} required></input>
                    <label htmlFor="fathersName">Father's Name</label>
                    <input className="form-control" type="text" name="fathersName" placeholder="fathersName" onChange={this.handleChange} required></input>
                    <label htmlFor="mothersName">Mother's Name</label>
                    <input className="form-control" type="text" name="mothersName" placeholder="mothersName" onChange={this.handleChange} required></input>
                    <label htmlFor="contact">Contact</label>
                    <input className="form-control" type="text" name="contact" placeholder="contact" onChange={this.handleChange} required></input>
                    <label htmlFor="gender">Gender</label>

                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" name="dob" placeholder="dob" onChange={this.handleChange} required></input>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}