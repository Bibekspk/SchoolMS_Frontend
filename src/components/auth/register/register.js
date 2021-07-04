import { Component } from "react";
import './register.css'

const defaultForm = {
    fullname: '',
    username: '',
    password: '',
    confirmpassword: '',
    telephone: '',
    phone: '',
    address: '',
    mail: '',
    gender: ''
}
export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: {
                ...defaultForm
            },
            userDetailsErr: {
                ...defaultForm
            }
        }
    }

    validateForm = (type, name) => {
        const errmsg = "required field*"
        const { userDetails, userDetailsErr } = this.state;
        if (type === 'change') {
            switch (name) {
                case "fullname":
                    userDetailsErr.fullname = userDetails.fullname ? "" : errmsg
                    if (userDetails.fullname && !userDetails.fullname.includes(" ")) {
                        userDetailsErr.fullname = "full name required*"
                    }
                    break
                case "username":
                    userDetailsErr.username = userDetails.username ? "" : errmsg
                    break
                case "password":
                    userDetailsErr.password = userDetails.password ? "" : errmsg
                    if(userDetails.password===userDetails.confirmpassword){
                        userDetailsErr.password="";
                        userDetailsErr.confirmpassword=""
                    }
                    if (userDetails.password && userDetails.password.length < 6) {
                        userDetailsErr.password = "password too weak"
                        break
                    }
                    if (userDetails.password.length>6 && userDetails.confirmpassword && userDetails.confirmpassword !== userDetails.password) {
                        userDetailsErr.password = "Password didnot matched"
                    }
                    break
                case "confirmpassword":
                    userDetailsErr.confirmpassword = userDetails.confirmpassword ? "" : errmsg
                    if(userDetails.password===userDetails.confirmpassword){
                        userDetailsErr.password="";
                        userDetailsErr.confirmpassword=""
                    }
                    if (userDetails.password && userDetails.confirmpassword && userDetails.confirmpassword !== userDetails.password) {
                        userDetailsErr.confirmpassword = "Password didnot matched"
                    }
                    break
                case "phone":
                    userDetailsErr.phone = userDetails.phone ? "" : errmsg
                    break
                case "address":
                    userDetailsErr.address = userDetails.address ? "" : errmsg
                    break
                case "mail":
                    userDetailsErr.mail = userDetails.mail ? "" : errmsg
                    if (userDetails.mail && !userDetails.mail.includes("@" && ".com")) {
                        userDetailsErr.mail = "Invalid email*"
                    }
                    break
                case "gender":
                    userDetailsErr.gender = userDetails.gender ? "" : errmsg
                    break
                default:
                    break
            }
        }
        if(type==="submit"){
            userDetailsErr.fullname = userDetails.fullname ? "" : errmsg;
            userDetailsErr.username = userDetails.username ? "" : errmsg;
            userDetailsErr.password = userDetails.password ? "" : errmsg;
            userDetailsErr.confirmpassword = userDetails.confirmpassword ? "" : errmsg;
            userDetailsErr.gender = userDetails.gender ? "" : errmsg;
            userDetailsErr.phone = userDetails.phone ? "" : errmsg;
            userDetailsErr.address = userDetails.address ? "" : errmsg;
            userDetailsErr.mail = userDetails.mail ? "" : errmsg;
        }
        this.setState(prevState => ({
            userDetailsErr: {
                ...prevState.userDetailsErr,
                ...userDetailsErr
            }
        }))
        const totalerrors = Object.values(userDetailsErr).filter(err => err);
        const isValidform = (totalerrors.length === 0)
        return isValidform

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.validateForm('submit'))
        if(!this.validateForm("submit")){
            return
        }
        console.log("this.state>>",this.state);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            userDetails: {
                ...prevState.userDetails,
                [name]: value
            }
        }), () => {
            this.validateForm("change", name)
        })
    }

    render() {
        const data = this.state;
        return (
            <div>
                <div style={{ marginLeft: "20%" }} className="container card mt-4 col-md-6" >
                    <h3 style={{ backgroundColor: "blue", color: "white", border: "2px solid white", textAlign: "center" }}>Register</h3>
                    <form className="col-md-12 form-group registerform" onSubmit={this.handleSubmit} noValidate>
                        <label htmlFor="fullname">Full Name</label>
                        <input className="input form-control" type="text" name="fullname" placeholder="Full name" onChange={this.handleChange}></input>
                        <p style={{ color: "red" }}>{data.userDetailsErr.fullname}</p>
                        <label htmlFor="username">Username</label>
                        <input className="input form-control" type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
                        <p style={{ color: "red" }}>{data.userDetailsErr.username}</p>
                        <label htmlFor="address">Address</label>
                        <input className="input form-control" type="text" name="address" placeholder="Address" onChange={this.handleChange}></input>
                        <p style={{ color: "red" }}>{data.userDetailsErr.address}</p>
                        <label htmlFor="gender">Gender</label>
                        <select className="input form-control" name="gender" onChange={this.handleChange}>
                            <option value="">Select Type</option>
                            <option value="male">Male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                        <p style={{ color: "red" }}>{data.userDetailsErr.gender}</p>
                        <label htmlFor="mail">E-mail</label>
                        <input className="input form-control" type="text" name="mail" placeholder="E-mail" onChange={this.handleChange}></input>
                        <p style={{ color: "red" }}>{data.userDetailsErr.mail}</p>
                        <label htmlFor="telephone">Telephone</label>
                        <input className="input form-control" type="number" name="telephone" placeholder="Telephone" onChange={this.handleChange}></input>
                        <label htmlFor="phone">Phone</label>
                        <input className="input form-control" type="number" name="phone" placeholder="Phone" onChange={this.handleChange}></input>
                        <p style={{ color: "red" }}>{data.userDetailsErr.phone}</p>
                        <label htmlFor="password">Password</label>
                        <input className="input form-control" type="password" name="password" placeholder="Password" onChange={this.handleChange}></input>
                        {
                            data.userDetails.password.length >= 6 && !data.userDetailsErr.password &&
                            <p style={{ color: "green" }}>Good password</p>
                        }{
                            (data.userDetails.password.length < 6||data.userDetailsErr.password) && <p style={{ color: "red" }}>{data.userDetailsErr.password}</p>
                        }
                        <label htmlFor="confirmpassword">Confirm password</label>
                        <input className="input form-control" type="password" name="confirmpassword" placeholder="Confirm password" onChange={this.handleChange}></input>
                        <p style={{ color: "red" }}>{data.userDetailsErr.confirmpassword}</p>
                        <br></br>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}